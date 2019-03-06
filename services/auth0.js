import auth0 from 'auth0-js';
import { resolve } from 'url';

class Auth0 {
  

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-5n0nbt9k.auth0.com',
      clientID: 'NI7a5qlNmvsANAdXW3GeAaq1kpCdK4aA',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve()
        } else if (err) {
          reject(err)
          console.log(err);
        }
      });

    })

  }

  setSession() {
    // Save tokens
  }
}

const auth0Client = new Auth0()

export default auth0Client