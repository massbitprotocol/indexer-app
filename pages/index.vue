<template>
  <div class="space-y-20 mb-20">
    <HomeHero />

    <HomeProjects />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'home',

  created() {
    console.log('this.$auth.loggedIn :>> ', this.$auth.loggedIn);
    console.log('this.$auth.strategy.token.get() :>> ', this.$auth.strategy.token.get());
  },
};
</script>
