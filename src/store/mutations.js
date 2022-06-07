export default {
  SET_LIST(state, data) {
    state.list = data;
  },
  SET_USER(state, userData) {
    state.user = userData;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  RESET_USER(state) {
    state.user = {};
  },
  RESET_ITEM(state) {
    state.item = {};
  }
}