<template>
  <section>
    <Loading v-if="isLoading" />
    <v-container fluid>
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6">
          <InputSearch @search="searchByName($event)" />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row no-gutters class="mb-4">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6" lg="6" v-if="isAllActive">
          <ListView
            :items="pokemonesFiltered"
            @changeFavorite="changeFavorite($event)"
            @hideFooter="hideFooter($event)"
            @getPokemon="getPokemonDetail($event)"
            :counter="counter"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" v-if="isFavoriteActive">
          <ListView
            :items="favoriteListFiltered"
            @changeFavorite="changeFavorite($event)"
            @hideFooter="hideFooter($event)"
            @getPokemon="getPokemonDetail($event)"
            :counter="counter"
          />
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" max-width="500" persistent>
              <ModalDetalle
                :info-poke="infoPoke"
                :pokemones-favorites="pokemonesFavoritos"
                @close="closeModal"
              />
            </v-dialog>
          </v-layout>
        </v-col>
      </v-row>
      <v-footer v-show="!isActiveFooter" fixed>
        <Footer @seccion="getSeccionList($event)" />
      </v-footer>
    </v-container>
  </section>
</template>
<script>
  import basicMixins from "../../mixins/axios";
  import Loading from "../Loading/Loading.vue";
  import Footer from "../Footer/Footer.vue";
  import InputSearch from "../Search/Search.vue";
  import ListView from "../Common/List/ListView.vue";
  import ModalDetalle from "../ModalDetalle/ModalDetalle.vue";

  export default {
    name: "PokemonListComponent",
    mixins: [basicMixins],
    components: {
      Loading,
      Footer,
      InputSearch,
      ListView,
      ModalDetalle,
    },
    data() {
      return {
        isLoading: false,
        isActiveFooter: false,
        pokemonesFiltered: [],
        pokemonesList: [],
        favoriteListFiltered: [],
        pokemonesFavoritos: [],
        dialog: false,
        infoPoke: {},
        isAllActive: true,
        isFavoriteActive: false,
        counter: 0,
      };
    },
    created() {
      this.isLoading = true;
      this.getDataList();
    },
    methods: {
      getDataList() {
        this.$get("pokemon/")
          .then((resp) => {
            const pokemones = resp.data.results;
            pokemones.forEach((item) => (item.isFavorite = false));
            this.pokemonesFiltered = pokemones;
            this.pokemonesList = pokemones;
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      },
      changeFavorite(item) {
        this.pokemonesList[item.i].isFavorite =
          !this.pokemonesList[item.i].isFavorite;
        this.favoriteListFiltered = this.pokemonesList.filter(
          (poke) => poke.isFavorite === true
        );
        this.pokemonesFavoritos = this.favoriteListFiltered;
      },
      getSeccionList(list) {
        if (list === "all") {
          this.isAllActive = true;
          this.isFavoriteActive = false;
        }
        if (list === "favorite") {
          this.isAllActive = false;
          this.isFavoriteActive = true;
        }
      },
      searchByName(search) {
        if (this.isAllActive) {
          if (search !== null && search.length > 0) {
            this.pokemonesFiltered = this.pokemonesList.filter((pokemon) =>
              `${pokemon.name}`.toLowerCase().includes(search.toLowerCase())
            );
          } else {
            this.pokemonesFiltered = this.pokemonesList;
          }
        }
        if (this.isFavoriteActive) {
          if (search !== null && search.length > 0) {
            this.favoriteListFiltered = this.pokemonesFavoritos.filter((pok) =>
              `${pok.name}`.toLowerCase().includes(search.toLowerCase())
            );
          } else {
            this.favoriteListFiltered = this.pokemonesFavoritos;
          }
        }
      },
      hideFooter(val) {
        this.isActiveFooter = val;
      },
      async getPokemonDetail(name) {
        this.dialog = true;
        this.isLoading = true;
        const resp = await this.$get(`pokemon/${name}`);
        if (resp) {
          this.infoPoke = resp.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      },
      closeModal() {
        this.dialog = false;
      },
    },
  };
</script>
