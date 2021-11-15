<template>
  <div class="bg-primary-background/[0.36] py-3">
    <div class="container mx-auto">
      <ol
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        class="flex items-center space-x-2 text-sm text-neutral-grey"
      >
        <li property="itemListElement" typeof="ListItem">
          <NuxtLink :to="{ name: 'index' }" class="hover:underline" property="item" typeof="WebPage">
            <span property="name">Smart Contract Indexer</span>
          </NuxtLink>
          <meta property="position" content="1" />
        </li>
        <li>/</li>
        <li property="itemListElement" typeof="ListItem" class="text-neutral-darkest font-semibold">
          <span property="name">{{ slug }}</span>
          <meta property="position" content="2" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBreadcrumb',

  props: {
    slug: {
      type: String,
      default: '',
    },
  },
};
</script>
