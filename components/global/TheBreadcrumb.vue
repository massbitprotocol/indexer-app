<template>
  <div class="bg-primary-background/[0.36] py-3">
    <div class="container mx-auto">
      <ol
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        class="flex items-center space-x-2 text-body-1 text-neutral-normal"
      >
        <li property="itemListElement" typeof="ListItem">
          <NuxtLink :to="mainRouter.to" class="hover:underline" property="item" typeof="WebPage">
            <span property="name">{{ mainRouter.name }}</span>
          </NuxtLink>
          <meta property="position" content="1" />
        </li>

        <li class="text-neutral-darkest font-semibold">/</li>

        <li property="itemListElement" typeof="ListItem" class="text-neutral-darkest font-medium">
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

    mainRouter: {
      type: Object,
      default: () => ({ name: 'Smart Contract Indexer', to: { name: 'index' } }),
    },
  },
};
</script>
