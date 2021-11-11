<template>
  <div>
    <nav class="flex items-center font-medium space-x-7.5">
      <NuxtLink
        class="uppercase text-neutral-darker font-semibold"
        exact-active-class="!text-primary"
        ex
        :to="{ name: 'index' }"
      >
        Smart Contract Indexer
      </NuxtLink>

      <NuxtLink
        class="uppercase text-neutral-darker font-semibold"
        exact-active-class="!text-primary"
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
