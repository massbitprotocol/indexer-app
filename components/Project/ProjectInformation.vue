<template>
  <section>
    <div>
      <div class="flex flex-col sm:items-center space-y-7.5 sm:flex-row sm:space-y-0 sm:space-x-7.5">
        <div class="flex-none mx-auto">
          <img
            :src="project.image"
            width="240"
            height="240"
            :alt="project.name"
            class="object-cover object-center rounded-xl bg-neutral-grey w-60 h-60"
          />
        </div>
        <div class="flex-grow">
          <div class="flex items-center space-x-1.5">
            <img
              src="https://i.pravatar.cc/24?u=6"
              width="24"
              height="24"
              class="rounded-full bg-neutral-grey w-6 h-6"
              alt=""
            />
            <div class="text-neutral-mid">{{ project.slug }}</div>
          </div>
          <div class="mt-3 flex items-center flex-wrap space-x-5">
            <h1 class="text-3xl sm:text-5xl text-neutral-darkest font-bold">{{ project.name }}</h1>

            <div v-if="project.deployed" class="bg-accent-green text-white uppercase px-3 py-2 rounded font-medium">
              Deployed
            </div>
            <div v-else class="bg-accent-red text-white uppercase px-3 py-2 rounded font-medium">Draft</div>
          </div>
          <div class="mt-7.5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <div>
              <div class="text-neutral-grey">Indexer Image</div>
              <div class="leading-9 text-neutral-darker font-medium truncate">onfinality/subql-node:v0.15.1</div>
            </div>
            <div>
              <div class="text-neutral-grey">Query Image</div>
              <div class="leading-9 text-neutral-darker font-medium truncate">onfinality/subql-query:v0.5.1</div>
            </div>
            <div>
              <div class="text-neutral-grey">Query URL</div>
              <div class="flex items-center space-x-2">
                <div class="leading-9 text-neutral-darker font-medium truncate select-all">
                  /massbit/id/0x2382—b65253-0
                </div>
                <TheCopyButton class="flex-none" text-to-copy="/massbit/id/0x2382—b65253-0" />
              </div>
            </div>
            <div>
              <div class="text-neutral-grey">Project ID</div>
              <div class="flex items-center space-x-2">
                <div class="leading-9 text-neutral-darker font-medium truncate select-all">0x2382—5253-0</div>
                <TheCopyButton class="flex-none" text-to-copy="0x2382—5253-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectInformation',

  props: {
    project: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
