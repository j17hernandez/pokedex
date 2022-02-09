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

<script src="./ModalDetalle.js"></script>
<style lang="css" src="./ModalDetalle.css"></style>
