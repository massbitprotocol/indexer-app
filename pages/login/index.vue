<template>
  <div class="min-h-[80vh] grid items-center mx-auto max-w-lg py-7.5 lg:py-10">
    <div>
      <div class="text-center text-title-2 lg:text-title-1 text-neutral-darkset font-bold">Welcome Back</div>
      <div class="mt-3 text-center text-body-2 lg:text-body-1 text-neutral-normal">
        See your growth and get consulting support!
      </div>

      <div class="mx-auto w-full h-[52px] max-w-md mt-5">
        <BaseGhostButton
          class="w-full h-[52px] flex items-center gap-2"
          type="submit"
          :loading="loading"
          @click="loginWithGithub"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 1.00046C7.63829 0.976732 5.36367 1.88092 3.67605 3.5143C1.98843 5.14769 1.0259 7.37661 1 9.71122C1.0091 11.5562 1.6095 13.3509 2.71496 14.8375C3.82042 16.3241 5.37406 17.4261 7.15273 17.9852C7.60273 18.0661 7.76636 17.7992 7.76636 17.5647V16.0846C5.26273 16.6103 4.73091 14.9199 4.73091 14.9199C4.56424 14.3892 4.20992 13.9356 3.73273 13.642C2.91455 13.1082 3.79818 13.1163 3.79818 13.1163C4.08099 13.1536 4.35156 13.2538 4.58962 13.4093C4.82767 13.5648 5.02702 13.7715 5.17273 14.014C5.42664 14.4493 5.84326 14.7685 6.33292 14.9032C6.82258 15.0378 7.34614 14.977 7.79091 14.7339C7.83665 14.2909 8.03955 13.8783 8.36364 13.5692C6.36727 13.3508 4.27273 12.6067 4.27273 9.26638C4.25487 8.39504 4.58056 7.55101 5.18091 6.91277C4.9075 6.16469 4.93978 5.34072 5.27091 4.61579C5.27091 4.61579 6.03182 4.38123 7.72545 5.50546C9.19973 5.11711 10.7512 5.11711 12.2255 5.50546C13.9436 4.38123 14.68 4.61579 14.68 4.61579C15.0111 5.34072 15.0434 6.16469 14.77 6.91277C15.3843 7.53931 15.7276 8.37768 15.7273 9.2502C15.7273 12.5986 13.6164 13.3346 11.6364 13.553C11.8532 13.7611 12.0206 14.0141 12.1267 14.2938C12.2328 14.5735 12.2749 14.8729 12.25 15.1706V17.5566C12.25 17.8396 12.4136 18.0661 12.8636 17.9771C14.6373 17.4145 16.1857 16.3123 17.2877 14.8278C18.3897 13.3433 18.989 11.5525 19 9.71122C18.9741 7.37661 18.0116 5.14769 16.3239 3.5143C14.6363 1.88092 12.3617 0.976732 10 1.00046Z"
              fill="#2C3ACF"
            />
          </svg>

          Login with Github
        </BaseGhostButton>
      </div>

      <div class="mx-auto w-full h-[52px] max-w-md flex items-center mt-5">
        <div class="flex-1 h-[1px] bg-primary-background"></div>
        <div class="flex-shrink-0 px-2 text-body-2 text-neutral-normal font-semibold">or Login with</div>
        <div class="flex-1 h-[1px] bg-primary-background"></div>
      </div>

      <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="div">
        <form class="mx-auto w-full max-w-md mt-2.5" @submit.prevent="handleSubmit(userLogin)">
          <div class="flex flex-wrap -mx-3 mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="username"
              tag="div"
              class="w-full px-3 mb-5 md:mb-0"
            >
              <div>
                <label
                  class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2"
                  for="grid-user-name"
                >
                  User name
                </label>
                <input
                  id="grid-user-name"
                  v-model.trim="form.username"
                  :class="{
                    'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4 mb-2.5 leading-tight': true,
                    'border-red-500': false,
                  }"
                  type="text"
                  placeholder="Username"
                />
                <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
          </div>

          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="password"
            tag="div"
            class="flex flex-wrap -mx-3 mb-5"
          >
            <div class="w-full px-3 mb-5 md:mb-0">
              <div class="flex justify-between">
                <label
                  class="block text-body-1 text-neutral-darkset font-semibold tracking-wide mb-2"
                  for="grid-password"
                >
                  Password
                </label>

                <NuxtLink class="text-body-2 text-accent-green font-semibold" :to="{ name: 'forgot-password' }">
                  Forgot password?
                </NuxtLink>
              </div>
              <input
                id="grid-password"
                v-model.trim="form.password"
                :class="{
                  'appearance-none block w-full text-body-2 text-gray-700 border border-primary-background rounded py-3 px-4  leading-tight': true,
                  'border-red-500': false,
                }"
                type="password"
                placeholder="Password"
              />
              <p v-if="errors[0]" class="text-red-500 text-xs italic mt-2.5">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>

          <div class="flex flex-wrap -mx-3 mb-7.5">
            <div class="w-full px-3 mb-5 md:mb-0">
              <label class="block text-body-2 text-neutral-darkset font-semibold cursor-pointer">
                <input class="mr-2 leading-tight focus:outline-none focus:ring-transparent" type="checkbox" />
                <span class="text-sm"> Remeber me </span>
              </label>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full px-3 mb-5 md:mb-0">
              <BaseButton class="w-full h-[52px]" type="submit" :disabled="invalid" :loading="loading">
                Login
              </BaseButton>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  auth: false,

  data() {
    return {
      form: {
        username: '',
        password: '',
      },

      loading: false,
    };
  },

  methods: {
    userLogin() {
      this.loading = true;

      console.log('Login');

      this.loading = false;
    },

    loginWithGithub() {
      this.$auth.loginWith('github');
    },
  },
};
</script>
