export const oktaConfig = {
  clientId: '0oa83v2d1f86i4pW45d7',
  issuer: 'https://dev-01348255.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsChecks: true
}