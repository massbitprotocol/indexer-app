<template>
  <div>
    <div class="text-heading-2 text-neutral-darkest font-bold">Deployment Details</div>

    <div class="text-body-2 text-neutral-grey font-semibold mt-1.5">
      You must deploy your Project before MassBit is able to index your data
    </div>

    <BaseButton class="h-[52px] flex items-center justify-center mt-7.5" @click="showModalDeployIndexer">
      <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.284 14.546C15.771 14.204 16.361 14 17 14C18.654 14 20 15.346 20 17C20 18.654 18.654 20 17 20C15.346 20 14 18.654 14 17C14.0038 16.7213 14.0472 16.4445 14.129 16.178L12.554 15.053C11.859 15.635 10.976 16 10 16C9.06353 15.9959 8.15874 15.6604 7.446 15.053L5.871 16.178C5.947 16.44 6 16.713 6 17C6 18.654 4.654 20 3 20C1.346 20 0 18.654 0 17C0 15.346 1.346 14 3 14C3.61467 14.0004 4.21414 14.1911 4.716 14.546L6.276 13.432C6.104 12.985 6 12.506 6 12C6 10.142 7.28 8.589 9 8.142V5.815C7.838 5.401 7 4.302 7 3C7 1.346 8.346 0 10 0C11.654 0 13 1.346 13 3C12.998 3.6184 12.8047 4.22104 12.4466 4.72522C12.0886 5.2294 11.5832 5.61042 11 5.816V8.142C12.72 8.589 14 10.142 14 12C13.9972 12.4903 13.9036 12.9758 13.724 13.432L15.284 14.546ZM16.3213 17.6918C16.4994 17.8781 16.7425 17.9885 17 18C17.2575 17.9885 17.5006 17.8781 17.6787 17.6918C17.8569 17.5055 17.9563 17.2577 17.9563 17C17.9563 16.7423 17.8569 16.4945 17.6787 16.3082C17.5006 16.1219 17.2575 16.0115 17 16C16.7425 16.0115 16.4994 16.1219 16.3213 16.3082C16.1431 16.4945 16.0437 16.7423 16.0437 17C16.0437 17.2577 16.1431 17.5055 16.3213 17.6918ZM2.32128 17.6918C2.49941 17.8781 2.74252 17.9885 3 18C3.25748 17.9885 3.50059 17.8781 3.67872 17.6918C3.85685 17.5055 3.95627 17.2577 3.95627 17C3.95627 16.7423 3.85685 16.4945 3.67872 16.3082C3.50059 16.1219 3.25748 16.0115 3 16C2.74252 16.0115 2.49941 16.1219 2.32128 16.3082C2.14315 16.4945 2.04373 16.7423 2.04373 17C2.04373 17.2577 2.14315 17.5055 2.32128 17.6918ZM11 3C11 2.449 10.551 2 10 2C9.449 2 9 2.449 9 3C9 3.551 9.449 4 10 4C10.551 4 11 3.551 11 3Z"
          fill="white"
        />
      </svg>

      <div class="text-body-1 font-semibold">Deploy</div>
    </BaseButton>

    <TheModal :open.sync="modalDeployIndexer">
      <div class="max-w-[570px] w-full bg-white p-5 rounded-lg z-10 text-center overflow-hidden">
        <div class="text-heading-2 font-bold text-neutral-darkest">Proccessing...</div>

        <div class="text-body-1 text-neutral-grey font-semibold mt-2">VER: {{ id }}</div>

        <div class="mt-7.5 flex items-center justify-center">
          <img src="~/assets/svg/process-deploy-app.svg" alt="" />
        </div>

        <!-- success -->
        <template v-if="status === 'success'">
          <svg class="mt-7.5" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.1" y="1.1" width="41.8" height="41.8" rx="20.9" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.6916 27.7525L15.0249 24.0858C14.547 23.6079 14.547 22.8355 15.0249 22.3576C15.5028 21.8797 16.2753 21.8797 16.7531 22.3576L19.486 25.0905L27.1836 16.3161C27.6236 15.8028 28.3948 15.7441 28.9057 16.1829C29.419 16.6229 29.4789 17.3929 29.0389 17.905L20.4834 27.6828C20.2621 27.9419 19.9419 28.0959 19.6021 28.1093C19.2318 28.1106 18.9201 27.9822 18.6916 27.7525Z"
              fill="#00B159"
            />
            <rect x="1.1" y="1.1" width="41.8" height="41.8" rx="20.9" stroke="#00B159" stroke-width="2.2" />
          </svg>
        </template>

        <!-- error -->
        <template v-else-if="status === 'error'">
          <svg class="mt-7.5" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.1" y="1.1" width="41.8" height="41.8" rx="20.9" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.7284 22L28.9754 16.753C29.4533 16.2751 29.4533 15.5027 28.9754 15.0248C28.4975 14.5469 27.725 14.5469 27.2471 15.0248L22.0001 20.2718L16.7531 15.0248C16.2753 14.5469 15.5028 14.5469 15.0249 15.0248C14.547 15.5027 14.547 16.2751 15.0249 16.753L20.2719 22L15.0249 27.247C14.547 27.7249 14.547 28.4974 15.0249 28.9752C15.2633 29.2136 15.5761 29.3334 15.889 29.3334C16.2019 29.3334 16.5148 29.2136 16.7531 28.9752L22.0001 23.7282L27.2471 28.9752C27.4855 29.2136 27.7984 29.3334 28.1113 29.3334C28.4241 29.3334 28.737 29.2136 28.9754 28.9752C29.4533 28.4974 29.4533 27.7249 28.9754 27.247L23.7284 22Z"
              fill="#EB5757"
            />
            <rect x="1.1" y="1.1" width="41.8" height="41.8" rx="20.9" stroke="#EB5757" stroke-width="2.2" />
          </svg>
        </template>

        <!-- proccessing -->
        <template v-else>
          <svg
            class="animate-spin h-10 w-10 text-primary mt-7.5"
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
        </template>
      </div>
    </TheModal>
  </div>
</template>

<script>
export default {
  name: 'ProjectDeployment',

  props: {
    // project: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },

  data() {
    return {
      modalDeployIndexer: false,
      status: null,
      polling: null,
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    indexerName() {
      return this.$route.params.indexer || null;
    },
  },

  methods: {
    async showModalDeployIndexer() {
      this.modalDeployIndexer = true;
      try {
        await this.deploy();

        this.polling = setInterval(async () => {
          const data = await this.fetch();
          if (`${data.status}`.toUpperCase() === 'DEPLOYED') {
            this.status = 'success';
            clearInterval(this.polling);

            setTimeout(() => {
              this.modalDeployIndexer = false;
            }, 10000);
          }
        }, 3000);
      } catch (error) {
        console.log('error :>> ', error);

        if (error.response && error.response.data) {
          const { message } = error.response.data;
          this.$notify({ type: 'error', text: message || 'An unknown error occurred, please try again' });
        } else {
          this.$notify({ type: 'error', text: error.message || 'An unknown error occurred, please try again' });
        }

        this.modalDeployIndexer = false;
      }
    },

    async fetch() {
      return await this.$store.dispatch('indexers/fetchByID', { id: this.id, indexer: this.indexerName });
    },

    async deploy() {
      return await this.$store.dispatch('indexers/deploy', { id: this.id, indexer: this.indexerName });
    },
  },
};
</script>
