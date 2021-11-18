export default {
  list(state) {
    return state.list;
  },

  getCurrent(state) {
    return state.current;
  },

  getByID: (state) => (id) => {
    return state.list.find((item) => item.id === id);
  },
};
