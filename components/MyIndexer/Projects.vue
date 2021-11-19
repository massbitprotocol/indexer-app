<template>
  <div class="mt-15">
    <div v-if="$auth.user" class="w-full flex items-center justify-between p-5 rounded-lg bg-neutral-lightest">
      <div class="flex items-center">
        <img :src="$auth.user.avatar_url" class="w-auto h-[80px] rounded-full mr-3" alt="" loading="lazy" />

        <div class="flex flex-col">
          <div class="text-title-2 text-neutral-darkest font-bold">{{ $auth.user.name }}</div>

          <div class="text-body-2 text-neutral/darker">0xf0c1 — 0b0b1c</div>
        </div>
      </div>

      <BaseButton
        class="h-[52px] flex items-center justify-center gap-2"
        @click="$router.push({ name: 'my-indexer-create' })"
      >
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
              <ProjectFilter :projects.sync="indexers" :filters.sync="filters" />

              <ProjectList class="mt-10">
                <ProjectCard
                  v-for="project in indexers"
                  :key="project.id"
                  :project="project"
                  router-name="my-indexer-id"
                >
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
            </div>

            <div v-else class="h-full flex items-center justify-center py-20">
              <span class="text-body-1 text-neutral-normal"> Empty </span>
            </div>
          </div>
        </template>

        <template #draft>
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
              <ProjectFilter :projects.sync="indexers" :filters.sync="filters" />

              <ProjectList class="mt-10">
                <ProjectCard
                  v-for="project in indexers"
                  :key="project.id"
                  :project="project"
                  router-ame="my-indexer-id"
                >
                  <template #action>
                    <div class="flex items-center justify-between">
                      <div
                        class="
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
                        Draft
                      </div>

                      <div class="text-caption text-neutral-grey font-semibold">4 day ago</div>
                    </div>
                  </template>
                </ProjectCard>
              </ProjectList>

              <div class="mt-15 mx-auto max-w-xs">
                <TheLoadMoreButton />
              </div>
            </div>

            <div v-else class="h-full flex items-center justify-center py-20">
              <span class="text-body-1 text-neutral-normal"> Empty </span>
            </div>
          </div>
        </template>
      </BaseTabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { cloneDeep } from 'lodash';

const tabHeaders = [
  {
    name: 'Deployed',
    key: 'deployed',
  },
  {
    name: 'Draft',
    key: 'draft',
  },
];
export default {
  name: 'MyIndexerProjects',

  async fetch() {
    await this.$store.dispatch('indexers/fetchAll');
  },

  data() {
    return {
      tabHeaders,
      current_tab: 'deployed',
      filters: {
        network: 'all',
        deployed: true,
      },
    };
  },

  computed: {
    ...mapGetters({
      indexers: 'indexers/list',
    }),
  },

  watch: {
    current_tab(value) {
      let deployed = false;
      if (value === 'deployed') {
        deployed = true;
      }

      const filters = cloneDeep(this.filters);
      filters.deployed = deployed;
      this.filters = filters;

      this.$fetch();
    },
  },
};
</script>
