<template>
  <NuxtLink
    :to="{ name: routerName, params: { id: project.id, indexer: project.indexer } }"
    class="rounded-lg p-3 pb-4 space-y-3 transition duration-150 ease-out hover:shadow-project-card"
  >
    <div class="aspect-w-1 aspect-h-1">
      <img
        loading="lazy"
        :src="project.imageUrl || 'https://storage.googleapis.com/massbit/05b23be7-04ae-450c-a955-ad66e33f891f.png'"
        width="234"
        height="234"
        alt=""
        class="object-cover object-center rounded-lg w-full"
      />
    </div>

    <div class="flex items-center space-x-2">
      <div class="flex-none">
        <img
          loading="lazy"
          :src="project.icon || `https://i.pravatar.cc/40?u=${project.id}`"
          width="40"
          height="40"
          alt="Profile Picture"
          class="rounded-full w-10 h-10"
        />
      </div>
      <div>
        <div class="text-body-1 text-neutral-darkest leading-tight font-bold sm:text-base">
          {{ project.name }}
        </div>
        <div class="text-caption text-neutral-grey">{{ project.slug }}</div>
      </div>
    </div>

    <div>
      <slot name="action" />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    project: {
      type: Object,
      required: true,
    },

    routerName: {
      type: String,
      default: 'projects-indexer-id',
    },
  },
};
</script>
