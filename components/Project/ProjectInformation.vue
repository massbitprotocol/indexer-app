<template>
  <section>
    <div>
      <div class="flex flex-col sm:items-center space-y-7.5 sm:flex-row sm:space-y-0 sm:space-x-7.5">
        <div class="flex-none mx-auto">
          <img
            :src="
              project.image ||
              'https://previews.dropbox.com/p/thumb/ABWpEtxTxHKBizo6xH-m1bIN7AwZMGPuZCVNFcAdKmkCFYoTcoCGu5DiVN3ne9n9RJYkZksqYcljJ3YNua9zP-83uI36x-MV6Frx7rmfJRPisZStuHtoLew_eJEms6ycc-8yi-w1xnS8RMMMwCZu6nw9gwbB40y0jJT3ObJdUGhfn3In8rhBtPvOdm6RN6wopnxeVn-YwPbcdDMdUz2aWRR0HHkKpjmYgWzFduViRfQXHCqpnCeRPOsJvWMjr0pQmL-xjTJPWAcRw8N3Ps7GlgLgq_-L8BuoaGFpXetmq-FTwudJZN_1Z3ozT_1cnr-x7VRTJecwl7vrZSIrlQ93jT_MmL5YKTXHGSmogtVRtgGSOw/p.png'
            "
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

          <div class="w-full mt-3 flex items-center justify-between">
            <div class="flex items-center space-x-5">
              <div class="text-3xl sm:text-5xl text-neutral-darkest font-bold">{{ project.name }}</div>
              <div
                v-if="project.deployed"
                class="
                  h-[38px]
                  flex
                  items-center
                  justify-center
                  px-3
                  bg-accent-green
                  text-white
                  uppercase
                  rounded
                  font-medium
                "
              >
                Deployed
              </div>
              <div
                v-else
                class="
                  h-[38px]
                  flex
                  items-center
                  justify-center
                  px-3
                  bg-accent-red
                  text-white
                  uppercase
                  rounded
                  font-medium
                "
              >
                Draft
              </div>
            </div>

            <BaseDropdown
              v-if="menu && menu.length > 0"
              class="flex items-center justify-center cursor-pointer"
              :source="menu"
              @on-select-item="onSelectItem"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.103 8 18 8.897 18 10C18 11.103 17.103 12 16 12C14.897 12 14 11.103 14 10C14 8.897 14.897 8 16 8ZM10 8C11.103 8 12 8.897 12 10C12 11.103 11.103 12 10 12C8.897 12 8 11.103 8 10C8 8.897 8.897 8 10 8ZM4 8C5.103 8 6 8.897 6 10C6 11.103 5.103 12 4 12C2.897 12 2 11.103 2 10C2 8.897 2.897 8 4 8Z"
                  fill="#050C72"
                />
              </svg>
            </BaseDropdown>
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

    menu: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onSelectItem({ key }) {
      switch (key) {
        case 'edit':
          // Edit Project
          this.$router.push({ name: 'my-indexer-edit-id', params: { id: this.project.id } });
          break;

        default:
          break;
      }
    },
  },
};
</script>
