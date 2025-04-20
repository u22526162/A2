// Amadeus Fidos u22526162
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const repoNames = event.queryStringParameters.repoNames;
  const repoList = repoNames.split(',');  
  try {
    const projects = await Promise.all(
      repoList.map(async (repoName) => {
        const response = await fetch(
          `https://api.github.com/repos/4Amadeus4/${repoName.trim()}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              'User-Agent': 'Amadeus-Portfolio-App',
              Accept: 'application/vnd.github.v3+json'
            }
          }
        )
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${repoName}: ${response.status}`)
        }
        
        const data = await response.json()
        return {
          id: data.id,
          name: data.name,
          description: data.description,
          html_url: data.html_url,
          updated_at: data.updated_at,
          language: data.language
        }
      })
    )
    
    return {
      statusCode: 200,
      body: JSON.stringify(projects),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
}