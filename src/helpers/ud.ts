import UAuth from '@uauth/js';

export default () => {
  return new UAuth({
    clientID: '1qyHcme87hjRz8XDZXjmU8MDsXrEnADy7OcLqzBz0oo=',
    clientSecret: 'g+q7k94JSs3vpQR2Z0IbwzeYmRvuZC+g5jSqtzJ8CIQ=',

    scope: 'openid email wallet',

    redirectUri: `https://defimarketplace2.vercel.app/callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://defimarketplace2.vercel.app/logout`,
  });
};
