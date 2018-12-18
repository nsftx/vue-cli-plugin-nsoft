import Vue from 'vue';
import Vuex from 'vuex';
import storeConfig from './storeConfig';

Vue.use(Vuex);

export default new Vuex.Store(storeConfig);
