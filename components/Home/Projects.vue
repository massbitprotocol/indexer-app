<template>
  <ProjectSection>
    <BaseTabs class="mt-5" :headers="tabHeaders" :current-tab.sync="current_tab"> </BaseTabs>

    <div>
      <ProjectList v-if="$fetchState.pending" class="mt-10">
        <ProjectCardLoading />

        <ProjectCardLoading />

        <ProjectCardLoading />
      </ProjectList>

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
