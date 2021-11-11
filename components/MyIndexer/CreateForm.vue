<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="div">
    <form class="mx-auto w-full mt-2.5" @submit.prevent="handleSubmit(createIndexer)">
      <div class="text-body-1 text-neutral-darkest font-semibold">Indexer Logo</div>
      <div class="mt-1 text-body-2 text-neutral-grey font-semibold">
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB
      </div>

      <BaseUploadFile />

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

      <ValidationProvider v-slot="{ errors }" rules="required" name="description" tag="div" class="w-full mt-5">
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
            v-model.trim="form.repoUrl"
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
            v-model.trim="form.webUrl"
            type="text"
            placeholder="Website URL"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <BaseSecondaryButton class="h-[52px] mt-5" type="submit" :disabled="invalid" :loading="loading">
        Create Indexer
      </BaseSecondaryButton>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'MyIndexerCreateForm',

  data() {
    return {
      loading: false,
      form: {
        name: '',
        description: '',
        repoUrl: '',
        webUrl: '',
      },
    };
  },

  methods: {
    createIndexer() {
      console.log('createIndexer', this.form);
    },
  },
};
</script>
