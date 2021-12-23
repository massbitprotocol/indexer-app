<template>
  <section>
    <div>
      <div class="flex flex-col justify-between mb-5 space-y-1.5 sm:space-y-0 sm:flex-row sm:items-center">
        <div class="text-neutral-darkest text-title-2 font-bold uppercase">Playground</div>

        <div class="grid grid-flow-col sm:gap-10">
          <div class="flex items-center space-x-3">
            <div class="text-neutral-mid">Query</div>
            <div class="bg-primary text-white uppercase rounded font-medium text-sm px-2 py-1 sm:px-3 sm:py-2">
              Healthy
            </div>
          </div>
          <!-- <div class="flex items-center space-x-3">
            <div class="text-neutral-mid">Indexer</div>
            <div class="bg-accent-red text-white uppercase rounded font-medium text-sm px-2 py-1 sm:px-3 sm:py-2">
              Unhealthy
            </div>
          </div> -->
        </div>
      </div>

      <client-only placeholder="Loading...">
        <GraphiQL :fetcher="fetcher" class="-mt-2 w-full h-[48rem] rounded-lg"> </GraphiQL>
      </client-only>
    </div>
  </section>
</template>

<script>
import { GraphiQL } from 'graphiql';

export default {
  name: 'ProjectPlayground',

  components: {
    GraphiQL,
  },

  computed: {
    projectID() {
      return this.$route.params.id;
    },

    indexer() {
      return this.$route.params.indexer || 'substrate';
    },

    queryURL() {
      if (this.$route.params) {
        // Solana
        if (this.indexer === 'solana') return this.$config.query.solUrl;
        // Substrate
        if (this.indexer === 'substrate') return this.$config.query.subUrl;
      }

      return '/';
    },
  },

  methods: {
    async fetcher(graphQLParams) {
      try {
        const data = await this.$axios.$post(`${this.queryURL}/indexers/${this.projectID}/graphql`, graphQLParams);
        if (this.indexer === 'solana') return data;

        return { data };
      } catch (error) {
        console.log('error :>> ', error);
      }

      return null;
    },
  },
};
</script>
