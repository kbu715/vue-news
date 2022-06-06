import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // news: [],
    // jobs: [],
    // ask: [],
    list: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions
})