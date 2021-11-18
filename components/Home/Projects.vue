<template>
  <ProjectSection>
    <ProjectFilter class="mt-7.5" :projects.sync="projects" :filters.sync="filters" />

    <ProjectList class="mt-10">
      <ProjectCard v-for="project in indexers" :key="project.id" :project="project" />
    </ProjectList>

    <div class="mt-15 mx-auto max-w-xs">
      <TheLoadMoreButton />
    </div>
  </ProjectSection>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeProjects',

  data() {
    return {
      filters: {
        network: 'all',
      },

      projects: [],
    };
  },

  async fetch() {
    await this.$store.dispatch('indexers/fetch');
  },

  computed: {
    ...mapGetters({
      indexers: 'indexers/list',
    }),
  },
};
</script>
