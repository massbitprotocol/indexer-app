<template>
  <ProjectSection>
    <BaseTabs class="mt-5" :headers="tabHeaders" :current-tab.sync="current_tab"> </BaseTabs>

    <div>
      <div v-if="$fetchState.pending" class="h-full flex items-center justify-center py-20">
        <svg
          class="animate-spin -ml-1 mr-3 h-8 w-8 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <span class="text-body-1 text-neutral-normal"> Loading... </span>
      </div>

      <div v-else>
        <div v-if="indexers && indexers.length > 0">
          <ProjectFilter class="mt-7.5" :projects.sync="projects" :filters.sync="filters" />

          <ProjectList class="mt-10">
            <ProjectCard v-for="project in indexers" :key="project.id" :project="project" />
          </ProjectList>

          <div class="mt-15 mx-auto max-w-xs">
            <TheLoadMoreButton />
          </div>
        </div>

        <div v-else class="h-full flex items-center justify-center py-20">
          <span class="text-body-1 text-neutral-normal"> Empty </span>
        </div>
      </div>
    </div>
  </ProjectSection>
</template>

<script>
import { mapGetters } from 'vuex';

const tabHeaders = [
  {
    name: 'Substrate',
    key: 'substrate',
  },
  {
    name: 'Solana',
    key: 'solana',
  },
];
export default {
  name: 'HomeProjects',

  data() {
    return {
      tabHeaders,
      current_tab: 'substrate',

      filters: {
        network: 'all',
      },

      projects: [],
    };
  },

  async fetch() {
    await this.$store.dispatch('indexers/fetch', this.current_tab);
  },

  fetchDelay: 500,

  watch: {
    current_tab(tab) {
      this.$fetch();
    },
  },

  computed: {
    ...mapGetters({
      indexers: 'indexers/list',
    }),
  },
};
</script>
