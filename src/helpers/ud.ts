import UAuth from '@uauth/js';

export default () => {
  return new UAuth({
    clientID: process.env.REACT_APP_NOT_CLIENT_ID,
    clientSecret: process.env.REACT_APP_NOT_CLIENT_SECRET,

    scope: 'openid email wallet',

    redirectUri: `https://defimarketplace2.vercel.app/callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://defimarketplace2.vercel.app/logout`,
  });
};
