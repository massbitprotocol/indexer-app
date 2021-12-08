<template>
  <div class="pb-14">
    <template v-if="indexer">
      <TheBreadcrumb :slug="indexer.name" :main-router="{ name: 'My Indexer', to: { name: 'my-indexer' } }" />
      <!-- end breadcrumb -->

      <ProjectInformation class="py-7.5" :project="indexer" />
      <!-- end information -->

      <ProjectOverview class="py-7.5" :project="indexer" />
      <!-- end overview -->

      <!-- <ProjectIndexerTable class="py-7.5" /> -->
      <!-- end indexer table -->

      <ProjectPlayground v-if="indexer.status && indexer.status.toUpperCase() === 'DEPLOYED'" class="py-7.5" />
      <!-- end playground -->

      <ProjectDeployment v-else :project.sync="indexer" />
      <!-- end deployment -->
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
