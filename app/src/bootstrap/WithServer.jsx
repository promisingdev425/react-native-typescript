import React from 'react';
import { Text } from 'react-native';
import { Login } from '~/pages'

/**
 * <WithServer> is used to provide live versions of all
 * services for the application.
 * @param {object} props
 * @param {string} [props.className]
 */
export function WithServer({
}) {
  return (
    <Login />
  );
}

