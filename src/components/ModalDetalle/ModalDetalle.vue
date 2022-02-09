<template>
  <v-card>
    <div class="modal-header">
      <v-btn class="btn-close" icon large color="white" @click="close">
        <v-icon large>mdi-close-circle</v-icon>
      </v-btn>
      <img
        class="image"
        alt="poke"
        v-if="infoPoke"
        :src="infoPoke.sprites.other.dream_world.front_default"
      />
    </div>
    <v-card-text class="pb-0">
      <v-list class="pb-0 pt-0">
        <v-list-item class="listCharacteres">
          <strong>Name: </strong> {{ infoPoke.name }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="listCharacteres">
          <strong>Weight:</strong> {{ infoPoke.weight }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="listCharacteres">
          <strong>Height: </strong> {{ infoPoke.height }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="listCharacteres">
          <strong>Types: </strong> {{ msn }}
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card-text>
    <v-card-actions class="pb-5">
      <v-btn
        color="#f22539"
        class="share"
        dark
        rounded
        @click="copyToClickBoard()"
      >
        Share to my friends
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon large :color="!isFavorite ? 'rgb(104, 103, 103)' : 'orange'"
          >mdi-star</v-icon
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "ModalDetalle",
    props: {
      infoPoke: { type: Object },
      pokemonesFavorites: { type: Array },
    },
    watch: {
      infoPoke: {
        handler() {
          this.get_Types();
          const arrayMsn = this.msn.split(",");
          arrayMsn.splice(arrayMsn.length - 1, 1);
          this.msn = arrayMsn.toString();
          this.encontrarFavorito();
          this.generatePortapapel();
        },
        deep: true,
      },
    },
    data() {
      return {
        msn: "",
        isFavorite: false,
        portapapel: "",
      };
    },
    methods: {
      onCopy() {
        alert(`Copiado al portapapeles exitosamente: \n${this.portapapel}`);
      },
      onError(err) {
        alert("Something went wrong", err);
      },
      generatePortapapel() {
        if (this.infoPoke) {
          this.portapapel = `Name: ${this.infoPoke.name},\n Weight: ${this.infoPoke.weight},\n Height: ${this.infoPoke.height},\n Types: ${this.msn}`;
        }
      },
      copyToClickBoard() {
        navigator.clipboard
          .writeText(this.portapapel)
          .then(() => {
            this.onCopy();
          })
          .catch((err) => {
            this.onError(err);
          });
      },
      encontrarFavorito() {
        if (this.pokemonesFavorites && this.pokemonesFavorites.length) {
          const existe = this.pokemonesFavorites.find(
            (poke) => poke.name === this.infoPoke.name
          );
          if (!existe) {
            this.isFavorite = false;
          } else {
            this.isFavorite = true;
          }
        }
      },
      get_Types() {
        this.msn = "";
        if (this.infoPoke) {
          this.infoPoke.types.forEach((item) => {
            this.msn += `${item.type.name},`;
          });
        }
      },
      close() {
        this.$emit("close");
      },
    },
  };
</script>
<style lang="css" src="./ModalDetalle.css"></style>
