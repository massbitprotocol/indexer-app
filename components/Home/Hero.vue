<template>
  <section class="bg-hero bg-no-repeat bg-cover bg-bottom">
    <div class="container mx-auto">
      <div class="h-auto lg:h-[55vh] grid items-center gap-10 lg:grid-cols-2">
        <div class="max-w-[655px] pb-20 mt-20 lg:mt-0">
          <h2
            class="
              text-large-title
              font-bold
              text-neutral-darkset
              leading-tight
              sm:text-4xl sm:leading-15.5
              lg:text-3xl lg:leading-tight
              xl:text-4xl xl:leading-15.5
            "
          >
            Transform and query the world’s data
          </h2>

          <p class="text-heading-2 text-neutral-darker font-semibold mt-5">
            Find and consume data faster from the leading Polkadot/Substrate protocols using our free MassBit explorer.
            The world’s decentralised data is now available to query using GraphQL
          </p>
        </div>

        <img src="~assets/svg/home-hero.svg" class="h-full w-auto m-auto pb-32" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
};
</script>
