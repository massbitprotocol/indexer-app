<template>
  <div class="text-center p-4 max-w-[277px]">
    <img :src="imageUrl" :alt="name" width="48" height="48" class="mx-auto" />
    <h3 class="text-neutral-darker font-bold mt-4">{{ name }}</h3>
    <p class="text-neutral-grey text-sm mt-1.5">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheFeatureItem',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
};
</script>
