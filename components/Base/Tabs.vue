<template>
  <div>
    <ul class="flex border-b border-primary-background gap-7.5">
      <template v-for="header in headers">
        <li :key="header.key" class="relative" @click="_currentTab = header.key">
          <a
            :class="{
              'relative flex bg-white text-primary font-bold after:absolute after:w-full after:h-[2px] after:bottom-0 after:bg-primary':
                _currentTab === header.key,
              'bg-transparent text-neutral-normal font-medium': !(_currentTab === header.key),
              'text-body-1 inline-block py-3 hover:text-primary/80 hover:border-primary/80 focus:outline-none uppercase cursor-pointer': true,
            }"
          >
            {{ header.name }}
          </a>

          <!-- <div class="absolute w-full h-[2px] bg-primary hover:border-primary/80"></div> -->
        </li>
      </template>
    </ul>

    <div class="w-full mt-7.5 bg-white">
      <template v-for="header in headers">
        <div v-show="header.key === _currentTab" :key="header.key">
          <slot :name="header.key" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    headers: {
      type: Array,
      default: () => [],
      required: true,
    },

    currentTab: {
      type: String,
      required: true,
    },
  },

  computed: {
    _currentTab: {
      get() {
        return this.currentTab;
      },

      set(value) {
        this.$emit('update:currentTab', value);
      },
    },
  },
};
</script>
