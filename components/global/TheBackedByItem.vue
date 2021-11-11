<template>
  <div
    class="
      w-[150px]
      text-neutral-mid
      bg-white/[0.14]
      rounded
      px-4.5
      pb-5
      pt-7.5
      flex flex-col
      items-center
      hover:shadow-project-card
    "
  >
    <img :src="imageUrl" alt="" width="80" height="46" class="mx-auto" />
    <p class="font-medium uppercase mt-7.5 whitespace-nowrap">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheBackedByItem',
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
