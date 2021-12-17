import { LocalScheme } from '~auth/runtime';

export default class GithubScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options);

    this.$auth = $auth;
    this.options = options;
  }

  login(payload, { reset = true } = {}) {
    console.log(' window.location :>> ', window.location.origin);
    window.location.href = `${this.options.endpoint}/auth/github/?redirectTo=${encodeURI(
      `${window.location.origin}/login?byToken=true`,
    )}`;
  }
}
