export default {
  async fetchAll({ commit }) {
    const clientSubIndexers = this.$subApi.$get('indexers', {}, { progress: false }).catch((error) => {
      return error;
    });
    const clientSolIndexers = this.$solApi.$get('indexers', {}, { progress: false }).catch((error) => {
      return error;
    });

    const indexers = await Promise.all([clientSubIndexers, clientSolIndexers]).then(
      ([resSubIndexer, resSolIndexers]) => {
        const _indexers = [];

        if (Array.isArray(resSubIndexer)) {
          _indexers.push(...resSubIndexer);
        }
        if (Array.isArray(resSolIndexers)) {
          _indexers.push(...resSolIndexers);
        }

        return _indexers;
      },
    );

    commit('setList', indexers);

    return indexers;
  },

  async fetch({ commit }, indexer) {
    let client;

    // Get client by indexer
    switch (indexer) {
      case 'solana':
        client = this.$solApi;
        break;

      default:
        client = this.$subApi;
        break;
    }

    try {
      // Start fetch data
      const indexers = await client.$get('indexers', {}, { progress: false });
      if (indexers) {
        commit('setList', indexers);

        return indexers;
      }
    } catch (error) {
      console.log('error :>> ', error);
    }

    commit('setList', []);

    return [];
  },

  async fetchByID({ commit }, id) {
    const data = await this.$subApi.$get(`indexers/${id}`, {}, { progress: false });
    if (data) {
      commit('setCurrent', data);

      return data;
    }

    commit('setCurrent', null);

    return [];
  },

  async create({ commit }, form) {
    const data = await this.$subApi.$post('indexers', { ...form }, { progress: false });

    return data;
  },
};
