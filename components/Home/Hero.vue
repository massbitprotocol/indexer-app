<template>
  <section class="bg-hero bg-no-repeat bg-cover bg-bottom pt-[80px]">
    <div class="container mx-auto">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div class="max-w-[655px]">
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
            Find and consume data faster from the leading Polkadot/Substrate
            protocols using our free MassBit explorer. The world’s decentralised
            data is now available to query using GraphQL
          </p>
        </div>

        <div class="pb-32">
          <img
            src="~assets/svg/home-hero.svg"
            class="
              mx-auto
              w-auto
              h-[400px]
              max-w-sm
              sm:max-w-lg
              lg:max-w-2xl
              -mb-4
            "
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>
