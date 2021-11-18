export default function ({ $axios, env }, inject) {
  // Create a custom axios instance
  const api = $axios.create({});

  api.setBaseURL(env.ethUrl);

  // Inject to context as $ethApi
  inject('ethApi', api);
}
