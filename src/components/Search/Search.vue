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
<script>
  export default {
    name: "InputSearch",
    data() {
      return {
        buscarInp: "",
      };
    },
    methods: {
      filtrar() {
        this.$emit("search", this.buscarInp);
      },
    },
  };
</script>
<style lang="css" src="./Search.css"></style>
