<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="div">
    <form class="mx-auto w-full mt-2.5" @submit.prevent="handleSubmit(editIndexer)">
      <div class="text-body-1 text-neutral-darkest font-semibold">Indexer Logo</div>
      <div class="mt-1 text-body-2 text-neutral-grey font-semibold">File types supported: JPG, PNG. Max size: 4 MB</div>

      <BaseUploadFile :preview.sync="preview" />

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
            v-model.trim="project.name"
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
            v-model.trim="project.description"
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
            :value="project.repo_url"
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
            v-model.trim="project.website_url"
            type="text"
            placeholder="Website URL"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <BaseSecondaryButton v-if="invalid" class="h-[52px] mt-5" type="submit" :disabled="true" :loading="loading">
        Edit Indexer
      </BaseSecondaryButton>
      <BaseButton v-else class="h-[52px] mt-5" type="submit" :loading="loading"> Edit Indexer </BaseButton>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'MyIndexerEditForm',

  created() {
    if (this.project && this.project.image) {
      this.preview = this.project.image;
    }
  },

  data() {
    return {
      loading: false,
      preview: null,
    };
  },

  methods: {
    editIndexer() {
      this.loading = true;

      if (this.preview) {
        this.project.image = this.preview;
      }

      this.loading = false;
    },
  },
};
</script>
