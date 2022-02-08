<template>
  <v-container class="mt-5" fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/pikachu.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Pokédex</h1>

        <p class="subheading font-weight-regular">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </v-col>
      <v-col cols="12">
        <v-btn color="red" dark rounded @click="getStarted()"
          >Get Started</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "Home",
    methods: {
      getStarted() {
        this.$router.push("/pokemonList");
      },
    },
  };
</script>
