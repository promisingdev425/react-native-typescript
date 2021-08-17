import * as AuthSessionNew from "expo-auth-session";
import jwtDecode from "jwt-decode";

// import getSettings from "../Config/GetSettings";
// import _ from "lodash";

const {
  auth0: { auth0Domain },
} = {
  auth0: {
    auth0Domain: "appartmentsnapshot.us.auth0.com",
    passwordlessClient: {
      client_id: "qHEbhi0oq2NYz1ki4inyN1EbdgH9ds7m",
      clientId: "qHEbhi0oq2NYz1ki4inyN1EbdgH9ds7m",
      allowedConnections: ["sms"],
      scope: "openid profile read:current_user update:current_user_identities",
      // response_type:
      // id_token will return a JWT token with the profile as described on the scope
      // token will return access_token to use with further api calls
      response_type: "token id_token",
      nonce: "nonce", // ideally, this will be a random value
    },
  },
};

// TODO Use library for this
const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

const logout = async () => {
  // return AuthSession.dismiss();
};

console.log(
  "[Auth] AuthSessionNew.getRedirectUrl",
  AuthSessionNew.getRedirectUrl()
);

const login = async (settings) => {
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  const redirectUrl = AuthSessionNew.getRedirectUrl();
  console.log("[Auth] redirectUrl", redirectUrl);

  // Structure the auth parameters and URL
  const params = {
    client_id: settings.client_id,
    redirect_uri: redirectUrl,
    // response_type:
    // id_token will return a JWT token with the profile as described on the scope
    // token will return access_token to use with further api calls
    response_type: "token id_token",
    // TODO Do I need to change this?
    nonce: "nonce", // ideally, this will be a random value
    rememberLastLogin: true,
    ...settings,
  };

  const queryParams = toQueryString(params);
  const authUrl = `https://${auth0Domain}/authorize${queryParams}`;

  // TODO Get this working on web
  // const response = await WebBrowser.openBrowserAsync(authUrl, {showInRecents: true});
  // const response = await WebBrowser.openAuthSessionAsync(authUrl, {showInRecents: true});
  const response = await AuthSessionNew.startAsync({
    authUrl,
    showInRecents: true,
  });

  // const response = await startAuth(authUrl);
  return handleLoginResponse(response);
};

const handleLoginResponse = (response) => {
  console.log("[Auth] handleLoginResponse");
  if (response.error || response.type !== "success") {
    console.error("[Auth] authentication failed");
    return;
  }

  const decodedJwtIdToken = jwtDecode(response.params.id_token);
  const fullName = decodedJwtIdToken["https://crm.kb.com/name"];
  console.log("[Auth] authentication success", fullName);
  return {
    ...decodedJwtIdToken,
    name: fullName,
    // TODO Does this work or do I need lodash.words?
    firstName: fullName.split(" ")[0],
    meta: decodedJwtIdToken["https://crm.kb.com/"],
    primaryUserId: decodedJwtIdToken.sub,
  };
};

export default { login, logout };
