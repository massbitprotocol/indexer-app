<template>
  <div class="pb-14">
    <template v-if="project">
      <MyIndexerBreadcrumb :slug="project.name" />
      <!-- end breadcrumb -->

      <ProjectInformation class="py-7.5" :project="project" :menu="menu" />
      <!-- end information -->

      <ProjectOverview class="py-7.5" />
      <!-- end overview -->

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
  name: 'IndexerDetail',

  apollo: {
    project: {
      query: getProjectByID,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id };
      },
    },
  },

  data() {
    return {
      menu: [
        {
          key: 'edit',
          value: 'Edit Project',
        },
      ],
    };
  },
};
</script>
