import Vue from "vue";
import Vuetify from "vuetify";
import { config } from '@vue/test-utils'
import axios from 'axios'

const push = jest.fn();
const $router = {
    push: jest.fn(),
}

config.mocks.$router = $router

Vue.use(axios)
Vue.config.productionTip = false;

Vue.use(Vuetify);