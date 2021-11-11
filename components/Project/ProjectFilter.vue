<template>
  <div>
    <div
      class="
        flex flex-col
        sm:flex-row
        justify-between
        space-y-4
        sm:space-y-0 sm:space-x-4
      "
    >
      <div class="flex-full md:flex-1">
        <div class="flex rounded-full">
          <div
            role="button"
            class="
              flex-none
              inline-flex
              items-center
              px-5
              rounded-l-full
              border border-r-0 border-neutral-lighter
              text-neutral-darker text-body-2
              font-semibold
              space-x-2.5
            "
          >
            <div>All Networks</div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 8L10 13L15 8H5Z"
                fill="#13274C"
              />
            </svg>
          </div>

          <div class="relative flex items-center justify-between w-full">
            <input
              id="company-website"
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
            />
            <div
              class="text-neutral-darker absolute right-4 pointer-events-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 8L10 13L15 8H5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectFilter",
};
</script>
