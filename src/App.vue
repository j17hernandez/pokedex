<template>
  <v-app class="bg">
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      //
    }),
  };
</script>
<style scoped>
  .bg {
    background: #faf9f9 !important;
  }
</style>
