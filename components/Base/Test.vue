<template>
  <div class="p-12 bg-gray-100 border border-gray-300" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <input
      type="file"
      multiple
      name="fields[assetsFieldHandle][]"
      id="assetsFieldHandle"
      class="w-px h-px opacity-0 overflow-hidden absolute"
      @change="onChange"
      ref="file"
      accept=".pdf,.jpg,.jpeg,.png"
    />

    <label for="assetsFieldHandle" class="block cursor-pointer">
      <div>
        Explain to our users they can drop files in here or <span class="underline">click here</span> to upload their
        files
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseTest',

  data() {
    return {
      filelist: [],
    };
  },

  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },

    dragover(event) {
      event.preventDefault();
      console.log('dragover =========================');
    },

    dragleave(event) {
      event.preventDefault();

      console.log('dragleave =========================');
    },

    drop(event) {
      event.preventDefault();
      console.log('here =======================');
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
    },
  },
};
</script>
