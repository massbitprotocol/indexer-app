<template>
  <div class="text-white bg-white/[0.14] rounded px-4.5 pb-5 pt-7.5 flex flex-col items-center">
    <img :src="imageUrl" alt="Ethereum" width="48" height="48" class="mx-auto" />
    <p class="font-medium uppercase mt-7.5 whitespace-nowrap">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheSupportedNetworkItem',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
};
</script>
