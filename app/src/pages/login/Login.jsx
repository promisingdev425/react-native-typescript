import React from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';

/**
 * `<Login>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function Login({
  ...rest
}) {
  return (
    <View {...rest}>
      <Text>Login Page</Text>
    </View>
  );
}

Login.propTypes = {
};

/**
 * `<LoginConnected>` connects the Login
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export function LoginConnected() {
  return (
    <Login
    />
  );
}
