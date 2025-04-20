<!--Amadeus Fidos u22526162-->
<template>
    <div>
        <h2>Catch your favourite Pokémon</h2>
         <p>Using: <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">pokeapi.co</a></p>
      <input v-model="pokemonName" placeholder="Enter Pokémon name" />
      <button @click="getPokemon">Search</button>
      <div v-if="pokemon">
        <h3>You caught: {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h3>
        <img :src="pokemon.sprites.front_default" />
        <div class="types">
            <h3>TYPE</h3>
        <ul> 
        <li v-for="type in pokemon.types">
          {{ type.type.name.charAt(0).toUpperCase() +type.type.name.slice(1)  }}
          </li>
        </ul>
      </div>

      <div class="stats">
        <h3>STATS</h3>
        <ul>
          <li v-for="stat in pokemon.stats">
            {{ stat.stat.name.toUpperCase() }}: {{ stat.base_stat }}
          </li>
        </ul>
      </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pokemonName: '',
        pokemon: null
      }
    },
    methods: {
      async getPokemon() {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`
          )
          this.pokemon = await response.json()
        } catch (error) {
          console.error("Failed to catch Pokémon:", error)
        }
      }
    }
  }
  </script>

<style scoped>
input {
  padding: 10px 15px;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  width: 250px;
}

button {
  padding: 10px 25px;
  border: 3px solid black;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  font-weight: bold;
}
</style>