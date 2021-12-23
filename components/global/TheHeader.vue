<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-5">
        <div class="inline-flex items-center">
          <TheLogoDark class="mr-5 lg:mr-10" />

          <TheNavigator class="relative top-0.5 hidden lg:block" />
        </div>

        <TheAccountDropdown v-if="$auth.loggedIn" class="hidden lg:block"> Account </TheAccountDropdown>
        <BaseGhostButton v-else class="hidden lg:block h-[44px]" @click="$router.push({ name: 'login' })">
          Login
        </BaseGhostButton>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
