<template>
  <div class="bg-primary-background/[0.36] py-3">
    <div class="container mx-auto">
      <ol
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        class="flex items-center space-x-2 text-sm text-neutral-grey"
      >
        <li property="itemListElement" typeof="ListItem">
          <NuxtLink :to="{ name: 'projects' }" class="hover:underline" property="item" typeof="WebPage">
            <span property="name">MassBit Explore</span>
          </NuxtLink>
          <meta property="position" content="1" />
        </li>
        <li>/</li>
        <li property="itemListElement" typeof="ListItem" class="text-neutral-darker">
          <span property="name">Bifrost</span>
          <meta property="position" content="2" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBreadcrumb',
};
</script>
