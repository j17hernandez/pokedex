<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <div height="200" width="200" class="contenedor">
          <div style="position: absolute">
            <img :src="require('../assets/Ellipse10.png')" alt="" class="eye" />
            <img
              :src="require('../assets/pikachu.png')"
              alt=""
              class="heaven"
            />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="">Welcome to Pokédex</h1>
        <p class="">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "HomeComponent",

    data: () => ({}),
  };
</script>
<style scoped>
  .title {
    position: absolute;
    width: 570px;
    height: 31px;
    left: 291px;
    top: 418px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #353535;
  }
  .subtitle {
    position: absolute;
    width: 570px;
    height: 54px;
    left: 291px;
    top: 479px;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */
    text-align: center;
    color: #5e5e5e;
  }
  .eye {
    position: absolute;
    /* height: 170px;
    width: 170px; */
    top: 58px;
    z-index: 0;
  }

  .heaven {
    position: absolute;
    z-index: 1;
    transform: translate(-46px, -7px);

    /* position: absolute;
    height: 230px;
    width: 248px;
    z-index: 1;
    transform: translate(-33px, -7px); */
  }
  .contenedor {
    display: inline-flex;
    transform: translate(-58px, 10px);
    line-height: normal;
    position: relative;
    text-align: center;
    vertical-align: bottom;
  }
  @media (max-width: 575.98px) {
    .heaven {
      position: absolute;
      width: 700px;
      z-index: 1;
      transform: translate(-81px, -41px);
    }
    .eye {
      position: absolute;
      /* height: 170px; */
      width: 500px;
      top: 58px;
      z-index: 0;
    }
  }
</style>
