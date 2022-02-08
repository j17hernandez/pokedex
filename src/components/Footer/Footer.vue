<template>
  <v-row>
    <v-col cols="6">
      <v-btn
        @click="cambioLista('todos')"
        id="todos"
        rounded
        class="botonFooter mt-2 float-right"
      >
        <v-icon color="white">mdi-format-list-bulleted</v-icon>
        All
      </v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn
        @click="cambioLista('favoritos')"
        id="favoritos"
        class="mt-2 botonFooter"
        rounded
      >
        <v-icon color="white">mdi-star</v-icon>
        Favorites
      </v-btn>
    </v-col>
  </v-row>
</template>

<script src="./Footer.js"></script>
<style lang="css" src="./Footer.css"></style>
