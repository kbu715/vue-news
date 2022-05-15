import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    SET_NEWS(state, newsData) {
      state.news = newsData;
    },
    SET_JOBS(state, jobsData) {
      state.jobs = jobsData;
    },
    SET_ASK(state, askData) {
      state.ask = askData;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
})