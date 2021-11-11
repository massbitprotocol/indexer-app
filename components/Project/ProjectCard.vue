<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="rounded-lg p-3 pb-4 space-y-3 transition duration-150 ease-out hover:shadow-project-card"
  >
    <div class="aspect-w-1 aspect-h-1">
      <img
        loading="lazy"
        :src="project.image"
        width="234"
        height="234"
        alt=""
        class="object-cover object-center rounded-lg bg-neutral-grey w-full"
      />
    </div>

    <div class="flex items-center space-x-2">
      <div class="flex-none">
        <img
          loading="lazy"
          :src="`https://i.pravatar.cc/40?u=${project.id}`"
          width="40"
          height="40"
          alt="Profile Picture"
          class="rounded-full w-10 h-10 bg-neutral-grey"
        />
      </div>
      <div>
        <div class="text-body-1 text-neutral-darkest leading-tight font-bold sm:text-base">
          {{ project.name }}
        </div>
        <div class="text-caption text-neutral-grey">OnFinality-io</div>
      </div>
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
  },
};
</script>
