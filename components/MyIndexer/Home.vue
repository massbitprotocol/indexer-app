<template>
  <div class="flex flex-col items-center justify-center pt-20 pb-30">
    <img
      src="~assets/svg/home-hero.svg"
      class="mx-auto w-auto h-[400px] max-w-sm sm:max-w-lg lg:max-w-2xl -mb-4"
      alt=""
    />

    <div class="text-center text-title-2 lg:text-title-1 text-neutral-darkset font-bold mt-11 mb-3">
      Welcome to Smart Contract Indexer
    </div>

    <div class="max-w-xl text-center px-5 text-body-2 lg:text-heading-2 text-neutral-darker font-semibold">
      Create and deploy your own Projects that will be hosted by MassBit and can be shared to the Explorer
    </div>

    <BaseButton class="mt-10 w-full lg:w-[194px] h-[52px]" @click="$router.push({ name: 'login' })"> Login </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'MyIndexerHome',
};
</script>
