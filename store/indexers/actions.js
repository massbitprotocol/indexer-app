export default {
  async fetchAll({ commit }) {
    // Init client
    const clientSubIndexers = this.$subApi.$get('indexers', {}, { progress: false }).catch((error) => {
      return error;
    });
    const clientSolIndexers = this.$solApi.$get('indexers', {}, { progress: false }).catch((error) => {
      return error;
    });

    const indexers = await Promise.all([clientSubIndexers, clientSolIndexers]).then(
      ([resSubIndexer, resSolIndexers]) => {
        const _indexers = [];

        // Substrate indexer
        if (Array.isArray(resSubIndexer)) {
          const _subIndexer = resSubIndexer.map((indexer) => ({
            ...indexer,
            deployed: true,
            indexer: 'substrate',
          }));

          _indexers.push(..._subIndexer);
        }
        // Solana indexer
        if (Array.isArray(resSolIndexers)) {
          const _solIndexer = resSolIndexers.map((indexer) => ({
            ...indexer,
            id: indexer.hash,
            repository: indexer.repo,
            deployed: true,
            indexer: 'solana',
          }));

          _indexers.push(..._solIndexer);
        }

        return _indexers;
      },
    );

    commit('setList', indexers);

    return indexers;
  },

  async fetch({ commit }, indexer) {
    let client, parseData;

    // Get client by indexer
    switch (indexer) {
      case 'solana':
        // Set client
        client = this.$solApi;

        // Set compile function
        parseData = (items) =>
          items.map((indexer) => ({
            ...indexer,
            id: indexer.hash,
            repository: indexer.repo,
            deployed: true,
            indexer: 'solana',
          }));

        break;

      default:
        // Set client
        client = this.$subApi;

        // Set compile function
        parseData = (items) =>
          items.map((indexer) => ({
            ...indexer,
            deployed: true,
            indexer: 'substrate',
          }));

        break;
    }

    try {
      // Start fetch data
      const indexers = await client.$get('indexers', {}, { progress: false });
      if (indexers) {
        const _indexers = parseData(indexers);

        commit('setList', _indexers);

        return _indexers;
      }
    } catch (error) {
      console.log('error :>> ', error);
    }

    commit('setList', []);

    return [];
  },

  async fetchByID({ commit }, { id, indexer }) {
    let client, parseData;

    // Get client by indexer
    switch (indexer) {
      case 'solana':
        // Set client
        client = this.$solApi;

        // Set compile function
        parseData = (indexer) => ({
          ...indexer,
          id: indexer.hash,
          repository: indexer.repo,
          deployed: true,
          indexer: 'solana',
        });

        break;

      default:
        // Set client
        client = this.$subApi;

        // Set compile function
        parseData = (indexer) => ({
          ...indexer,
          indexer: 'substrate',
        });

        break;
    }

    const data = await client.$get(`indexers/${id}`, {}, { progress: false });
    if (data) {
      const _data = parseData(data);
      commit('setCurrent', _data);

      return _data;
    }

    commit('setCurrent', null);

    return [];
  },

  async create({ commit }, { form, indexer }) {
    switch (indexer) {
      case 'solana':
        return await this.$solApi.$post('indexers/create', { ...form }, { progress: false });

      default:
        return await this.$subApi.$post('indexers', { ...form }, { progress: false });
    }
  },

  async uploadImage({ commit }, form) {
    return await this.$axios.$post('upload-file', form, { progress: false });
  },

  async deploy({ commit }, { id, indexer }) {
    if (indexer === 'substrate') return await this.$subApi.$post(`indexers/${id}/deploy`, {}, { progress: false });
    if (indexer === 'solana')
      return await this.$solApi.$post(
        `indexers/gitdeploy`,
        {
          id,
        },
        { progress: false },
      );

    return { success: true };
  },
};
