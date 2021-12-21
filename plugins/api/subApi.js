export default function ({ $axios, $auth, env }, inject) {
  // Create a custom axios instance
  const api = $axios.create({});

  api.setBaseURL(env.subUrl);

  // Inject to context as $subApi
  inject('subApi', api);
}
