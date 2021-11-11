<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-col justify-between mb-5 space-y-1.5 sm:space-y-0 sm:flex-row sm:items-center">
        <h2 class="text-neutral-darker text-lg font-bold uppercase">{{ title }}</h2>
        <slot name="header" />
      </div>

      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheSectionContainerWithTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
