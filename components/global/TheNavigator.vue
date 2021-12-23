<template>
  <div>
    <nav class="flex items-center font-medium space-x-7.5">
      <NuxtLink
        class="text-body-1 uppercase text-neutral-darker font-medium"
        exact-active-class="!text-primary"
        ex
        :to="{ name: 'index' }"
      >
        Community Indexer
      </NuxtLink>

      <NuxtLink
        class="text-body-1 uppercase text-neutral-darker font-medium"
        exact-active-class="!text-primary !font-bold"
        :to="{ name: 'my-indexer' }"
      >
        My Indexer
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavigator',
};
</script>
