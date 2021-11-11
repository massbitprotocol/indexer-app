<template>
  <section class="bg-hero bg-no-repeat bg-cover bg-bottom pt-16 md:pt-32">
    <div class="container mx-auto">
      <div class="grid items-center gap-y-10 lg:grid-cols-2 py-12">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold text-neutral-darkest leading-tight sm:text-4xl sm:leading-15.5">
            Transform and <br class="hidden lg:block" />
            query the world’s data
          </h2>

          <p class="text-lg text-neutral-mid mt-5">
            Find and consume data faster from the leading Polkadot/Substrate protocols using our free MassBit explorer.
            The world’s decentralised data is now available to query using GraphQL.
          </p>
        </div>

        <img src="~assets/svg/project-hero.svg" alt="" class="mx-auto w-full h-auto max-w-sm lg:max-w-2xl" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectHero',
};
</script>
