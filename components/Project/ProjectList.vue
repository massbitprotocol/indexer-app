<template>
  <div>
    <div class="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-7">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
};
</script>
