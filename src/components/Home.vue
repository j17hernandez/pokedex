<template>
  <v-container class="mt-5" fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/pikachu.png')" contain height="300" />
      </v-col>
      <v-col cols="12" class="title">
        <h3 class="mt-5">Welcome to Pokédex</h3>
      </v-col>
      <v-col cols="12" class="con">
        <p class="text-center mt-3">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to <br />
          Trainers in the Pokémon world.
        </p>
      </v-col>
      <v-col cols="12">
        <v-btn color="red" dark rounded large @click="getStarted()">
          Get Started
        </v-btn>
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
<style scoped>
  .title {
    /* font-size: 26px; */
    font-family: Lato, Helvetica, Arial, Verdana, Tahoma, sans-serif !important;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }
  .con,
  .title {
    justify-content: center;
    align-items: center;
  }
</style>
