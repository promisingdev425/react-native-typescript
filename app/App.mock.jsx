import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/native'

import { Auth0Mock } from '~/services/auth/mock'
import { themes } from '~/theme'
import useFonts from '~/assets/fonts/useFonts'

import MainApp from './App.api'
import { WithMocks } from './src/bootstrap/WithMocks.jsx'

/**
 * If this version of <App> is used as the application
 * entry point, it will inject mock services into the
 * app. You can use this in testing by providing any
 * services you need mocked through props.
 * @param {object} props
 * @param {object} [props.authService]
 * @return {React.ReactNode}
 */
export default function App({
  // Allow passing a different mock implementation during testing.
  authService = new Auth0Mock(),
  // Any other services or props will be passed through to <WithMocks>
  ...rest
}) {
  const theme = themes.light
  const fontsLoaded = useFonts()

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <MainApp
        // Provide a mock implementation of our auth client.
        authService={authService}
      >
        {/*
          Provide a version of the app that uses mocks for
          all services.
        */}
        <WithMocks {...rest} />
      </MainApp>
    </ThemeProvider>
  ) : null
}

App.propTypes = {
  authService: PropTypes.object,
}

App.defaultProps = {
  authService: null,
}
