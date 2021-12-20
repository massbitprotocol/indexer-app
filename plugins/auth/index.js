export default function ({ $auth, $subApi, $solApi, $ethApi }) {
  // Set auth-token & lang
  $subApi.interceptors.request.use(
    function (config) {
      if (!config.params) {
        config.params = {};
      }
      if ($auth) {
        const token = $auth.strategy.token.get();
        if (token) {
          config.headers.Authorization = token;
        }
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  $solApi.interceptors.request.use(
    function (config) {
      if (!config.params) {
        config.params = {};
      }
      if ($auth) {
        const token = $auth.strategy.token.get();
        if (token) {
          config.headers.Authorization = token;
        }
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  $ethApi.interceptors.request.use(
    function (config) {
      if (!config.params) {
        config.params = {};
      }
      if ($auth) {
        const token = $auth.strategy.token.get();
        if (token) {
          config.headers.Authorization = token;
        }
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
}
