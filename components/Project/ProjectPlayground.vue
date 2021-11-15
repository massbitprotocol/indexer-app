<template>
  <section>
    <div>
      <div class="flex flex-col justify-between mb-5 space-y-1.5 sm:space-y-0 sm:flex-row sm:items-center">
        <h2 class="text-neutral-darker text-lg font-bold uppercase">Playground</h2>

        <div class="grid grid-flow-col sm:gap-10">
          <div class="flex items-center space-x-3">
            <div class="text-neutral-mid">Query</div>
            <div class="bg-primary text-white uppercase rounded font-medium text-sm px-2 py-1 sm:px-3 sm:py-2">
              Healthy
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <div class="text-neutral-mid">Indexer</div>
            <div class="bg-accent-red text-white uppercase rounded font-medium text-sm px-2 py-1 sm:px-3 sm:py-2">
              Unhealthy
            </div>
          </div>
        </div>
      </div>

      <embed src="https://rickandmortyapi.com/graphql/" class="-mt-2 w-full h-[48rem] rounded-lg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectPlayground',
};
</script>
