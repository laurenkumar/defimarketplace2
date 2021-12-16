import UAuth from '@uauth/js';

export default () => {
  return new UAuth({
    clientID: '1qyHcme87hjRz8XDZXjmU8MDsXrEnADy7OcLqzBz0oo=',
    clientSecret: 'qfddsE1aV2AJUQyhNCv+rt8F1nB6m+7TrlL8qZbfX0o=',

    scope: 'openid email wallet',

    redirectUri: `https://defimarketplace2.vercel.app//callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://defimarketplace2.vercel.app//logout`,
  });
};
