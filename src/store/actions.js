import { fetchAskList, fetchJobsList, fetchNewsList } from '../api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) { // destructuring (ES6)
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