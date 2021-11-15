<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
      <div class="flex-full md:flex-1">
        <div class="flex rounded-full">
          <select
            role="button"
            class="
              flex
              rounded-l-full
              border border-r-0 border-neutral-lighter
              text-neutral-darker text-body-2
              font-semibold
              px-7.5
            "
          >
            <!-- <div>All Networks</div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L10 13L15 8H5Z" fill="#13274C" />
            </svg> -->
            <option class="py-3" v-for="projectFilter in projectFilters" :key="projectFilter.key">
              {{ projectFilter.name }}
            </option>
          </select>

          <div class="relative flex items-center justify-between w-full">
            <input
              id="company-website"
              v-model="filter"
              type="text"
              name="company-website"
              class="
                flex-1
                block
                w-full
                rounded-r-full
                border-neutral-lighter
                placeholder-neutral-grey
                pl-5
                pr-12
                py-2
                sm:text-sm sm:py-2.5
                focus:ring-primary focus:border-primary
              "
              placeholder="Search"
              @input="filterProjects"
            />
            <div class="text-neutral-darker absolute right-4 pointer-events-none">
              <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>

              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.59998 8.39967C3.59998 5.75261 5.75276 3.59992 8.39994 3.59992C11.0471 3.59992 13.1999 5.75261 13.1999 8.39967C13.1999 11.0467 11.0471 13.1994 8.39994 13.1994C5.75276 13.1994 3.59998 11.0467 3.59998 8.39967ZM17.7654 16.6336L13.4495 12.3171C14.3245 11.1987 14.7999 9.81964 14.7999 8.39967C14.7999 4.87105 11.9287 2 8.39994 2C4.87117 2 2 4.87105 2 8.39967C2 11.9283 4.87117 14.7993 8.39994 14.7993C9.81988 14.7989 11.1989 14.3236 12.3175 13.449L16.6343 17.7648C16.7084 17.8393 16.7965 17.8985 16.8936 17.9389C16.9906 17.9792 17.0947 18 17.1998 18C17.305 18 17.4091 17.9792 17.5061 17.9389C17.6032 17.8985 17.6913 17.8393 17.7654 17.7648C17.8398 17.6906 17.8988 17.6024 17.939 17.5054C17.9793 17.4083 18 17.3043 18 17.1992C18 17.0942 17.9793 16.9901 17.939 16.8931C17.8988 16.796 17.8398 16.7079 17.7654 16.6336Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 flex justify-end">
        <div
          role="button"
          class="
            w-full
            sm:w-52
            border border-neutral-lighter
            rounded-full
            text-body-2 text-neutral-darker
            font-semibold
            flex
            items-center
            justify-between
            py-2.5
            px-5
          "
        >
          <div>Sort by: Alphabetical</div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L10 13L15 8H5Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { filterProjectByName } from '~/graphql/queries/project.graphql';

const projectFilters = [
  { key: 'all', name: 'All Networks' },
  { key: 'main', name: 'Mainnet' },
  { key: 'test', name: 'Testnet' },
];
export default {
  name: 'ProjectFilter',

  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      projectFilters,
      filter: '',
      loading: false,
    };
  },

  computed: {
    _projects: {
      get() {
        return this.projects;
      },

      set(value) {
        this.$emit('update:projects', value);
      },
    },
  },

  methods: {
    filterProjects: debounce(async function () {
      this.loading = true;

      const res = await this.$apollo
        .query({
          query: filterProjectByName,
          variables: { name: this.filter },
        })
        .then(({ data: { filterProjectByName } }) => ({
          data: filterProjectByName,
        }));
      if (res.data) {
        this._projects = res.data;
      }

      this.loading = false;
    }, 1000),
  },
};
</script>
