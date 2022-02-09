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

<script>
  export default {
    name: "Footer",
    data() {
      return {
        isAllActive: true,
        isFavoriteActive: false,
      };
    },
    mounted() {
      this.cambioLista("all");
    },
    methods: {
      cambioLista(lista) {
        if (lista === "all") {
          this.isAllActive = true;
          this.isFavoriteActive = false;
        }
        if (lista === "favorite") {
          this.isAllActive = false;
          this.isFavoriteActive = true;
        }
        this.$emit("seccion", lista);
      },
      getColor(type) {
        let color;
        if (this.isAllActive && type == "all") {
          color = "#f22539";
        } else if (this.isFavoriteActive && type == "favorite") {
          color = "#f22539";
        } else {
          color = "rgb(104, 103, 103)";
        }
        return color;
      },
    },
  };
</script>
<style lang="css" src="./Footer.css"></style>
