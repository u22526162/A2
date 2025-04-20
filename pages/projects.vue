<!--Amadeus Fidos u22526162-->
<template>
    <div>
      <h1>My Projects</h1>
      <h3>Project data accessed through GitHub API</h3>
      <div v-if="loading" class="loading">Loading projects...</div>
      <div v-else class="project-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
        >
          <h2>{{ getDisplayName(project.name) }}</h2>
          <p>{{ project.description || 'No description available' }}</p>
          <div class="date">
            <span v-if="project.updated_at">Updated: {{ formatDate(project.updated_at) }}</span>
          </div>
          <button @click="openGithubRepo(project)" class="github-btn">
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const repoNames = [
    "IMY210_P2",
    "COS332_Prac3",
    "u22526162_HW01"
  ];
  const titleMap = [
    {
        repoName: "IMY210_P2",
        displayName: "Venue capacity counter"   
    },
  {
    repoName: "u22526162_HW01",
    displayName: "Product listings page"
  },
{
    repoName: "COS332_Prac3",
    displayName: "Web-based calculator"
}]; //descriptive titles
  const getDisplayName = (repoName) => {
  const match = titleMap.find(item => item.repoName === repoName);
  return match ? match.displayName : repoName;
};

  const projects = ref([]);
  const loading = ref(true);
  
  const fetchProjects = async () => {
  try {
    projects.value = await $fetch('/.netlify/functions/getGitHubProjects', {
      query: { repoNames }
    });
  } catch (error) {
    projects.value = repoNames.map(repoName => ({
      name: repoName,
      description: 'Could not get repo details',
      html_url: `https://github.com/4Amadeus4/${repoName}`
    }));
  } finally {
    loading.value = false;
  }
};
  
  const openGithubRepo = (project) => {
    window.open(project.html_url, '_blank');
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  onMounted(fetchProjects);
  </script>
  
  <style scoped>
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .project-card {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .date {
    margin-top: auto;
    padding-top: 10px;
    font-size: 0.8rem;
    color: #586069;
  }
  
  .loading {
    padding: 20px;
    text-align: center;
  }
  
  .github-btn {
    display: inline-block;
    margin-top: 15px;
    padding: 8px 15px;
    background: #4a6fa5;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }
  
  .github-btn:hover {
    background: #3a5a8f;
  }
  </style>