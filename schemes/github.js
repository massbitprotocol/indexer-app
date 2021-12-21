import { LocalScheme } from '~auth/runtime';

export default class GithubScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options);

    this.$auth = $auth;
    this.options = options;
  }

  login(payload, { reset = true } = {}) {
    window.location.href = `${this.options.endpoints.login}/auth/github/?redirectTo=${encodeURI(
      `${window.location.origin}/login?byToken=true`,
    )}`;
  }
}
