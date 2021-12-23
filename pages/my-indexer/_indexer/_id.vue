<template>
  <div class="pb-80">
    <template v-if="indexer">
      <Portal to="breadcrumb" tag="div">
        <TheBreadcrumb :slug="indexer.name" :main-router="{ name: 'My Indexer', to: { name: 'my-indexer' } }" />
      </Portal>

      <ProjectInformation class="py-15" :project="indexer" />

      <ProjectOverview class="py-15" :project="indexer" />

      <ProjectPlayground v-if="indexer.status && indexer.status.toUpperCase() === 'DEPLOYED'" class="py-7.5" />

      <ProjectDeployment v-else :project.sync="indexer" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Project',

  async fetch() {
    await this.$store.dispatch('indexers/fetchByID', { id: this.id, indexer: this.indexerName });
  },

  computed: {
    ...mapGetters({
      indexer: 'indexers/getCurrent',
    }),

    id() {
      return this.$route.params.id || null;
    },

    indexerName() {
      return this.$route.params.indexer || null;
    },
  },
};
</script>
