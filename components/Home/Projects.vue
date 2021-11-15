<template>
  <ProjectSection>
    <ProjectFilter class="mt-7.5" :projects.sync="projects" :filters.sync="filters" />

    <ProjectList class="mt-10">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </ProjectList>

    <div class="mt-15 mx-auto max-w-xs">
      <TheLoadMoreButton />
    </div>
  </ProjectSection>
</template>

<script>
import getProjects from '~/graphql/queries/projects.graphql';

export default {
  name: 'HomeProjects',

  apollo: {
    projects: {
      query: getProjects,
      prefetch: true,
      variables() {
        return this.filters;
      },
    },
  },

  data() {
    return {
      filters: {
        network: 'all',
      },
    };
  },
};
</script>
