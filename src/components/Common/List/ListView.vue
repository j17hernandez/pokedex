<template>
  <v-container>
    <div v-if="items.length > 0">
      <v-list width="100%" height="100%" two-line class="pt-0" outlined rounded>
        <template v-for="(pokemon, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              <v-list-item-title>
                <span class="name" @click="getPokemon(pokemon.name)">{{
                  pokemon.name
                }}</span>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                @click="changeFavorite(pokemon, index)"
                icon
                color="rgb(104, 103, 103)"
              >
                <v-icon
                  :color="pokemon.isFavorite ? 'orange' : 'rgb(104, 103, 103)'"
                  >mdi-star</v-icon
                >
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider :key="pokemon.name"></v-divider>
        </template>
      </v-list>
    </div>
    <div v-else>
      <v-container class="mt-4 text-center">
        <h1><strong>Uh-oh!</strong></h1>
        <h6>You look lost on your journey!</h6>
        <v-btn @click="backHome" color="#f22539" rounded dark class="mt-3">
          Go back home
        </v-btn>
      </v-container>
    </div>
  </v-container>
</template>
<script>
  export default {
    name: "ListView",
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    watch: {
      items: {
        handler(v) {
          if (v.length == 0) {
            this.$emit("hideFooter", true);
          } else {
            this.$emit("hideFooter", false);
          }
        },
        deep: true,
      },
    },
    methods: {
      changeFavorite(pokemon, i) {
        this.$emit("changeFavorite", { pokemon, i });
      },
      backHome() {
        this.$router.push("/");
      },
      getPokemon(name) {
        this.$emit("getPokemon", name);
      },
    },
  };
</script>
<style scoped>
  .name {
    text-transform: capitalize;
  }
  .name:hover {
    cursor: pointer;
  }
</style>
