<template>
  <v-text-field
    v-model="buscarInp"
    placeholder="Search"
    @input="filtrar"
    aria-label="Search"
    outlined
    dense
    prepend-inner-icon="mdi-magnify"
    clearable
    solo
  />
</template>
<script src="./Search.inf.js"></script>
<style lang="css" src="./Search.css"></style>
