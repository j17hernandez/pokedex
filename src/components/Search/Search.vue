<template>
  <v-text-field
    v-model="buscarInp"
    placeholder="Search"
    @input="filtrar"
    aria-label="Search"
    outlined
    dense
    append-icon="mdi-magnify"
    clearable
  />
</template>
<script src="./Search.inf.js"></script>
<style lang="css" src="./Search.css"></style>
