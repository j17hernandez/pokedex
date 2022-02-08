<template>
  <section>
    <Loading v-if="isLoading" />
    <v-container fluid>
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6">
          <Search></Search>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row no-gutters class="mb-4">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-card width="100%" height="500px" style="overflow-y: auto">
            <div>
              <v-list width="100%" height="100%" two-line class="pt-0">
                <template v-for="(pokemon, index) in pokemonesFiltered">
                  <v-divider :key="pokemon.name"></v-divider>
                  <v-list-item :key="index">
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ pokemon.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn @click="changeFavorite(pokemon, index)" icon>
                        <v-icon
                          :color="
                            pokemon.isFavorite
                              ? 'yellow'
                              : 'color: rgb(104, 103, 103)'
                          "
                          >mdi-star-circle</v-icon
                        >
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list>
            </div>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-footer fixed>
        <Footer></Footer>
      </v-footer>
    </v-container>
  </section>
</template>
<script>
  import basicMixins from "../../mixins/axios";
  import Loading from "@/components/Loading/Loading.vue";
  import Footer from "../Footer/Footer.vue";
  import Search from "../Search/Search.vue";
  export default {
    name: "PokemonListComponent",
    mixins: [basicMixins],
    components: {
      Loading,
      Footer,
      Search,
    },
    data() {
      return {
        isLoading: false,
        pokemonesFiltered: [],
      };
    },
    created() {
      this.isLoading = true;
      this.getData();
    },
    methods: {
      getData() {
        this.$get("pokemon/")
          .then((resp) => {
            const pokemones = resp.data.results;
            pokemones.forEach((item) => (item.isFavorite = false));
            this.pokemonesFiltered = pokemones;
            console.log();
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      },
      changeFavorite(item, i) {
        this.pokemonesFiltered[i].isFavorite =
          !this.pokemonesFiltered[i].isFavorite;
        console.log(item, i);
      },
    },
  };
</script>
