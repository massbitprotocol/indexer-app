<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader class="bg-white" />

    <main class="flex-auto">
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>
