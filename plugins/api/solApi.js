export default function ({ $axios, env }, inject) {
  // Create a custom axios instance
  const api = $axios.create({});

  api.setBaseURL(env.solUrl);

  // Inject to context as $solApi
  inject('solApi', api);
}
