import * as AuthSessionNew from 'expo-auth-session'
import jwtDecode from 'jwt-decode'
import { ServiceBase } from '@thesoulfresh/utils'
import { VERBOSE, AUTH_DOMAIN, AUTH_CLIENT_ID } from '@env'

// TODO Use library for this
const toQueryString = (params) =>
  '?' +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&')

export class Auth0 extends ServiceBase {
  /**
   * NOTE
   * The following is just an example of how you might construct
   * your auth client.
   *
   * @param {boolean} verbose - Whether to perform verbose logging.
   * @param {*} [client] - Allows passing injecting any dependent
   *   client objects.
   */
  constructor(verbose = VERBOSE, client = null) {
    super(client, verbose)
  }

  /**
   * Get the user's current authenticated state.
   *
   * NOTE
   * The implementation is up to you but a good option
   * is to return null if the user is not authenticated
   * and the API response if they are.
   */
  getUser() {
    // NOTE The following auth response is for illustration
    // purposes only. Your implementation can return whatever
    // you need it to.
    return Promise.resolve({ user: 'Bob' })
    // return Promise.resolve(null);
  }

  /**
   * Authenticate the user.
   */
  authenticate() {
    return Promise.resolve({ user: 'Bob' })
  }

  async login(settings) {
    // Retrieve the redirect URL, add this to the callback URL list
    // of your Auth0 application.
    const redirectUrl = AuthSessionNew.getRedirectUrl()
    this.debug('[Auth] redirectUrl', redirectUrl)

    // Structure the auth parameters and URL
    const params = {
      client_id: AUTH_CLIENT_ID,
      redirect_uri: redirectUrl,
      // response_type:
      // id_token will return a JWT token with the profile as described on the scope
      // token will return access_token to use with further api calls
      response_type: 'token id_token',
      // TODO Do I need to change this?
      nonce: 'nonce', // ideally, this will be a random value
      rememberLastLogin: true,
      ...settings,
    }

    const queryParams = toQueryString(params)
    const authUrl = `https://${AUTH_DOMAIN}/authorize${queryParams}`

    // TODO Get this working on web
    // const response = await WebBrowser.openBrowserAsync(authUrl, {showInRecents: true});
    // const response = await WebBrowser.openAuthSessionAsync(authUrl, {showInRecents: true});
    const response = await AuthSessionNew.startAsync({
      authUrl,
      showInRecents: true,
    })

    // const response = await startAuth(authUrl);
    return onLogin(response)
  }

  onLogin(response) {
    console.log('[Auth] handleLoginResponse')
    if (response.error || response.type !== 'success') {
      console.error('[Auth] authentication failed')
      return
    }

    const decodedJwtIdToken = jwtDecode(response.params.id_token)
    const fullName = decodedJwtIdToken['https://crm.kb.com/name']
    console.log('[Auth] authentication success', fullName)
    return {
      ...decodedJwtIdToken,
      name: fullName,
      // TODO Does this work or do I need lodash.words?
      firstName: fullName.split(' ')[0],
      meta: decodedJwtIdToken['https://crm.kb.com/'],
      primaryUserId: decodedJwtIdToken.sub,
    }
  }

  logout() {}
}
