<template>
  <div class="mt-15">
    <div class="w-full flex items-center justify-between p-5 rounded-lg bg-neutral-lightest">
      <div class="flex items-center">
        <img src="/assets/svg/avatar.svg" class="w-auto h-[80px] mr-3" alt="" loading="lazy" />

        <div class="flex flex-col">
          <div class="text-title-2 text-neutral-darkest font-bold">OnFinality-io</div>

          <div class="text-body-2 text-neutral/darker">0xf0c1 — 0b0b1c</div>
        </div>
      </div>

      <BaseButton class="h-[52px] flex items-center justify-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 9H11V3C11 2.448 10.553 2 10 2C9.447 2 9 2.448 9 3V9H3C2.447 9 2 9.448 2 10C2 10.552 2.447 11 3 11H9V17C9 17.552 9.447 18 10 18C10.553 18 11 17.552 11 17V11H17C17.553 11 18 10.552 18 10C18 9.448 17.553 9 17 9Z"
            fill="white"
          />
        </svg>

        Create Indexer
      </BaseButton>
    </div>

    <div class="mt-15">
      <div class="text-title-1 text-neutral-darkest font-bold">My Indexer</div>

      <BaseTabs class="mt-5" :headers="tabHeaders" :current-tab.sync="current_tab">
        <template #deployed>
          <ProjectFilter />

          <ProjectList class="mt-10">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project">
              <template #action>
                <div class="flex items-center justify-between">
                  <div
                    class="
                      w-[84px]
                      flex
                      items-center
                      justify-center
                      px-2
                      py-1
                      uppercase
                      text-caption
                      font-semibold
                      text-white
                      bg-accent-green
                      rounded
                    "
                  >
                    Deployed
                  </div>

                  <div class="text-caption text-neutral-grey font-semibold">4 day ago</div>
                </div>
              </template>
            </ProjectCard>
          </ProjectList>

          <div class="mt-15 mx-auto max-w-xs">
            <TheLoadMoreButton />
          </div>
        </template>

        <template #undeployed>
          <ProjectFilter />

          <ProjectList class="mt-10">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project">
              <template #action>
                <div class="flex items-center justify-between">
                  <div
                    class="
                      w-[84px]
                      flex
                      items-center
                      justify-center
                      px-2
                      py-1
                      uppercase
                      text-caption
                      font-semibold
                      text-white
                      bg-accent-red
                      rounded
                    "
                  >
                    Undeployed
                  </div>

                  <div class="text-caption text-neutral-grey font-semibold">4 day ago</div>
                </div>
              </template>
            </ProjectCard>
          </ProjectList>

          <div class="mt-15 mx-auto max-w-xs">
            <TheLoadMoreButton />
          </div>
        </template>
      </BaseTabs>
    </div>
  </div>
</template>

<script>
import getProjects from '~/graphql/queries/projects.graphql';

const tabHeaders = [
  {
    name: 'Deployed',
    key: 'deployed',
  },
  {
    name: 'Undeployed',
    key: 'undeployed',
  },
];
export default {
  name: 'MyIndexerProjects',

  apollo: {
    projects: {
      query: getProjects,
    },
  },

  data() {
    return {
      tabHeaders,
      current_tab: 'deployed',
    };
  },
};
</script>
