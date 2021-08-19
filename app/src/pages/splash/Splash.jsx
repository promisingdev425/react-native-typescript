import React from 'react';
import { View } from 'react-native';

import { Container, LogoImage } from './styles'

/**
 * `<Splash>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function Splash({
  ...rest
}) {
  return (
    <Container {...rest}>
      <LogoImage />
    </Container>
  );
}

Splash.propTypes = {
};

/**
 * `<SplashConnected>` connects the Splash
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export function SplashConnected() {
  return (
    <Splash
    />
  );
}
