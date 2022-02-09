<template>
  <v-overlay>
    <v-container class="text-center container-loading">
      <img
        class="loading"
        :src="require('../../assets/loading.png')"
        alt="loading"
      />
    </v-container>
  </v-overlay>
</template>
<script>
  export default {
    name: "Loading",
  };
</script>
<style lang="css" src="./Loading.css"></style>
