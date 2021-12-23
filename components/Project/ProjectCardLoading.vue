<template>
  <div class="animate-pulse rounded-lg p-3 pb-4 space-y-3">
    <div class="rounded-lg bg-primary-background h-[234px] w-[234px]"></div>

    <div class="flex items-center space-x-2">
      <div class="flex-none rounded-full bg-primary-background w-[40px] h-[40px]"></div>

      <div class="flex-shrink flex flex-col justify-evenly w-full h-[40px]">
        <div class="rounded-full bg-primary-background w-2/3 h-[10px]"></div>

        <div class="rounded-full bg-primary-background w-1/2 h-[6px]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardLoading',
};
</script>
