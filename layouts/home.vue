<template>
  <div>
    <TheHeader class="bg-neutral-lightest" />

    <main class="">
      <Nuxt />
    </main>

    <TheFooter />

    <BaseNotification />
  </div>
</template>

<script>
export default {
  name: 'LayoutHome',
};
</script>
