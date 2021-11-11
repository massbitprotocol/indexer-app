<template>
  <button
    v-bind="$attrs"
    :type="type"
    class="
      font-medium
      bg-primary
      text-white
      rounded-full
      flex
      items-center
      space-x-1.5
      hover:bg-primary/90
      focus:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2
    "
    v-on="$listeners"
  >
    <slot name="left" />
    <span>
      <slot />
    </span>
    <slot name="right" />
  </button>
</template>

<script>
export default {
  name: 'ThePrimaryButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>
