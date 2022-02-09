<template>
  <v-row>
    <v-col cols="6">
      <v-btn
        rounded
        x-large
        :color="getColor('all')"
        class="botonFooter mt-2 float-right"
        dark
        @click="cambioLista('all')"
      >
        <v-icon color="white">mdi-format-list-bulleted</v-icon>
        All
      </v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn
        class="mt-2 botonFooter"
        rounded
        dark
        x-large
        :color="getColor('favorite')"
        @click="cambioLista('favorite')"
      >
        <v-icon color="white">mdi-star</v-icon>
        Favorites
      </v-btn>
    </v-col>
  </v-row>
</template>

<script src="./Footer.js"></script>
<style lang="css" src="./Footer.css"></style>
