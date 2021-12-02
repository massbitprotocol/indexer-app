<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="div">
    <form class="mx-auto w-full mt-2.5" @submit.prevent="handleSubmit(createIndexer)">
      <div class="text-body-1 text-neutral-darkest font-semibold">Indexer Logo</div>
      <div class="mt-1 text-body-2 text-neutral-grey font-semibold">File types supported: JPG, PNG. Max size: 4 MB</div>

      <BaseUploadFile :preview.sync="form.imageUrl" @on-read-file="onReadFile" :loading="loadingUploadImage" />

      <ValidationProvider v-slot="{ errors }" rules="required" name="indexer name" tag="div" class="w-full mt-5">
        <div>
          <label class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2" for="grid-name">
            Indexer name
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-name"
            v-model.trim="form.name"
            type="text"
            placeholder="e.g: your product name"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" name="description" tag="div" class="w-full mt-5">
        <div>
          <label class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2" for="grid-description">
            Description
          </label>

          <textarea
            class="
              resize-y
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            rows="5"
            id="grid-description"
            v-model.trim="form.description"
            type="area"
            placeholder="Provide a detailed description of your item."
          >
          </textarea>

          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <div class="w-full mt-5">
        <div>
          <label class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2" for="grid-name">
            Indexer
          </label>

          <BaseRadioButtonGroup :source="indexers" :current-key.sync="currentIndexer" />
        </div>
      </div>

      <ValidationProvider v-slot="{ errors }" rules="required" name="repository URL" tag="div" class="w-full mt-5">
        <div>
          <label class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2" for="grid-repo-url">
            Github Repository URL (this must be a public repository)
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-repo-url"
            v-model.trim="form.repository"
            type="text"
            placeholder="Repository URL"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="required" name="website URL" tag="div" class="w-full mt-5">
        <div>
          <label class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2" for="grid-repo-url">
            Website URL
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-repo-url"
            v-model.trim="form.websiteUrl"
            type="text"
            placeholder="Website URL"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <BaseSecondaryButton v-if="invalid" class="h-[52px] mt-5" type="submit" :disabled="true" :loading="loading">
        Create Indexer
      </BaseSecondaryButton>
      <BaseButton v-else class="h-[52px] mt-5" type="submit" :loading="loading"> Create Indexer </BaseButton>
    </form>
  </ValidationObserver>
</template>

<script>
const indexers = [
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
  name: 'MyIndexerCreateForm',

  data() {
    return {
      loadingUploadImage: false,
      loading: false,
      currentIndexer: 'solana',
      indexers,

      form: {
        name: '',
        description: '',
        repository: '',
        websiteUrl: '',
        imageUrl: '',
      },
    };
  },

  methods: {
    async createIndexer() {
      this.loading = true;

      try {
        const project = await this.$store.dispatch('indexers/create', {
          form: this.form,
          indexer: this.currentIndexer,
        });
        if (project && project.id) {
          this.$notify({ type: 'success', text: 'Indexer created!' });

          this.$router.push({
            name: 'my-indexer-indexer-id',
            params: { id: project.id, indexer: this.currentIndexer },
          });
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const { message } = error.response.data;
          this.$notify({ type: 'error', text: message || 'An unknown error occurred, please try again' });
        } else {
          this.$notify({ type: 'error', text: error.message || 'An unknown error occurred, please try again' });
        }
      }

      this.loading = false;
    },

    async onReadFile(image) {
      this.loadingUploadImage = true;

      const bodyFormData = new FormData();
      bodyFormData.append('file', image);

      try {
        const resFile = await this.$store.dispatch('indexers/uploadImage', bodyFormData);
        if (resFile && resFile.publicUrl) {
          this.form.imageUrl = resFile.publicUrl;
        }
      } catch (error) {
        console.log('error :>> ', error);
      }

      this.loadingUploadImage = false;
    },
  },
};
</script>
