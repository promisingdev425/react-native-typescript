import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MOCKS } from '@env';

import { useExampleAuth } from '~/services/auth';

import Main from './src/bootstrap/WithServer.jsx';

function PageLoader() {
  return <Text>Loading...</Text>;
}

function Login() {
  return <Text>Login In</Text>;
}

export default function App({
  authService,
  ...rest
}) {
  const {
    initialized,
    authenticated,
    onLogin,
    onForgotLogin,
    onLogout
  } = useExampleAuth(authService);

  const props = {
    ...rest,
    onSuccess: () => console.log('Authentication not implemented yet.'),
    // Use this callback to handle the case that the user
    // made a request and their authentication is no longer
    // valid. By default, this will simply log out the user
    // but you may need to handle this differently based on
    // your authentication mechanism.
    onAuthFailure: onLogout,
  };

  // Render the login overlay above the main app.
  return (
    <>
      {!authenticated &&
        <Login onLogin={onLogin} onForgotLogin={onForgotLogin} />
      }
      {initialized &&
        <React.Suspense fallback={<PageLoader />}>
          <Main {...rest} />
        </React.Suspense>
      }
    </>
  );

  // if (!authenticated) {
  //   return <Login onLogin={onLogin} onForgotLogin={onForgotLogin} />;
  // } else if (initialized) {
  //   return (
  //     <React.Suspense fallback={<PageLoader />}>
  //       <Main {...rest} />
  //     </React.Suspense>
  //   );
  // } else {
  //   // TODO Will we ever get into this state?
  //   return <PageLoader />;
  // }

  // return (
  //   <View style={styles.container}>
  //     <React.Suspense fallback={<PageLoader />}>
  //       <Main />
  //     </React.Suspense>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
