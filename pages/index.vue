<!--Amadeus Fidos u22526162-->
<template>
    <div class="main-container">
    <div class="box">
      <h1>Amadeus Fidos</h1>
      <p>3rd Year computer science student at the University of Pretoria. I enjoy coding and playing table tennis.</p>
      <NuxtImg src="/images/photo.jpg" alt="profile photo" class="my-photo"/>
      <p></p>
    </div>
    <div class="box">
        <div class="poke-holder">
            <pokemon/>
        </div>
    </div>
    </div>
  </template>

  <style scoped>
    .main-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding-top: 10px ;
    }

    .box {
        border: 1px solid #333;
        border-radius: 3px;
        padding:  6px;
    }
    .poke-holder {
        padding: 5px;
    }

    .my-photo {
        max-width: 350px;
    }
</style>