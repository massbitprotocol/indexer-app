export default function ({ $axios, env }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    withCredentials: true,
  });

  api.setBaseURL(env.userApi);

  // Inject to context as $userApi
  inject('userApi', api);
}
