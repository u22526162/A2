<!--Amadeus Fidos u22526162-->
<template>
    <nav class="navbar">
      <div class="navContainer">
        <div class="navMenu">
          <NuxtLink to="/" class="navItem" exact-active-class="active">
            Home
          </NuxtLink>
          <NuxtLink to="/projects" class="navItem" active-class="active">
            Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="navItem" active-class="active">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 0px;
  }
  
  .navTitle {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: -20px;
  }
  
  .navMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem;
  }
  
  .navItem {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  
  .navItem:hover {
    background-color: #555;
  }
  
  .navItem.active {
    background-color: #4a6fa5;
  }
  
  .navToggle {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: block;
  }
  
  .icon-bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: white;
  }
  
  @media (min-width: 768px) {
    .navToggle {
      display: none;
    }
  
    .navMenu {
      position: static;
      flex-direction: row;
      transform: none;
      padding: 0;
    }
  
    .navItem {
      margin: 0;
    }
  }
  </style>