import { fetchCommentItem, fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo } from '../api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response.data; // Promise chaining을 하기 위해서
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) { // destructuring (ES6)
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(err => {
        console.log(err);
      });
  },
}