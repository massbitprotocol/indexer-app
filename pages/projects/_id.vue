<template>
  <div class="pb-14">
    <template v-if="project">
      <TheBreadcrumb :slug="project.name" />
      <!-- end breadcrumb -->

      <ProjectInformation class="py-7.5" :project="project" />
      <!-- end information -->

      <ProjectOverview class="py-7.5" />
      <!-- end overview -->

      <!-- <ProjectIndexerTable class="py-7.5" /> -->
      <!-- end indexer table -->

      <ProjectPlayground v-if="project.deployed" class="py-7.5" />
      <!-- end playground -->

      <ProjectDeployment v-else :project.sync="project" />
      <!-- end deployment -->
    </template>
  </div>
</template>

<script>
import { getProjectByID } from '~/graphql/queries/project.graphql';

export default {
  name: 'Project',

  apollo: {
    project: {
      query: getProjectByID,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id };
      },
    },
  },
};
</script>
