import React from 'react'

import { Container, LogoImage } from './styles'

/**
 * `<Splash>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const Splash = ({ ...rest }) => (
  <Container {...rest}>
    <LogoImage />
  </Container>
)

/**
 * `<SplashConnected>` connects the Splash
 * component with the rest of the app (ie. routing, services, store, etc.).
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
/* istanbul ignore next */
export const SplashConnected = () => <Splash />
