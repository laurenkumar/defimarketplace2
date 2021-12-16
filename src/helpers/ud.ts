import UAuth from '@uauth/js';

export default () => {
  return new UAuth({
    clientID: '1qyHcme87hjRz8XDZXjmU8MDsXrEnADy7OcLqzBz0oo=',
    clientSecret: 'Yk/+Io/Bvcfsxqg5ThP5PLkYQPWktGky1xV9pAYp6IY=',

    scope: 'openid email wallet',

    redirectUri: `https://defimarketplace2.vercel.app/callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://defimarketplace2.vercel.app/logout`,
  });
};
