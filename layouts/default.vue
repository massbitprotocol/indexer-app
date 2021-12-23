<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader class="bg-white border-b border-primary-background" />

    <PortalTarget name="breadcrumb" />

    <main class="container mx-auto flex-auto">
      <Nuxt />
    </main>

    <TheFooter />

    <BaseNotification />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
