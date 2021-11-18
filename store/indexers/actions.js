export default {
  async fetch({ commit }) {
    const data = await this.$axios.$get('indexers', {}, { progress: false });
    if (data) {
      commit('setList', data);

      return data;
    }

    commit('setList', []);

    return [];
  },

  async fetchByID({ commit }, id) {
    const data = await this.$axios.$get(`indexers/${id}`, {}, { progress: false });
    if (data) {
      commit('setCurrent', data);

      return data;
    }

    commit('setCurrent', null);

    return [];
  },

  async create({ commit }, form) {
    const data = await this.$axios.$post('indexers', { ...form }, { progress: false });

    return data;
  },
};
