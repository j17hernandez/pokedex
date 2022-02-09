import Vue from "vue";
import Vuetify from "vuetify";
import { config } from '@vue/test-utils'
import axios from 'axios'

const push = jest.fn();
const $router = {
    push: jest.fn(),
}

config.mocks.$t = llave => llave

config.mocks.$router = $router
config.mocks.$i18n = llave => llave

Vue.use(axios)
Vue.config.productionTip = false;

Vue.use(Vuetify);