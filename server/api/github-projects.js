// Amadeus Fidos u22526162

//original api caller - not used in netlify app
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  
  const query = getQuery(event);
  let repoNames = [];
  
  if (Array.isArray(query.repoNames)) {
    repoNames = query.repoNames;
  } else if (typeof query.repoNames === 'string') {
    repoNames = [query.repoNames];
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: 'repoNames must be string or array of strings'
    });
  }  // handle array and single string parameters

  const fetchRepo = async (repoName) => {
    try {
      const response = await $fetch(`https://api.github.com/repos/4Amadeus4/${repoName}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'Amadeus-Portfolio-App'
        }
      });
      return response;
    } catch (error) {
      console.error(`Error fetching ${repoName}:`, error);
      return {
        name: repoName,
        description: 'Could not load repo data',
        html_url: `https://github.com/4Amadeus4/${repoName}`
      }; // return alternative data to display
    }
  };

  const projects = await Promise.all(repoNames.map(fetchRepo));
  return projects;
});