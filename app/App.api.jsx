import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/native'

import { useAuthService } from '~/services/auth'
import { themes } from '~/theme'
import useFonts from '~/assets/fonts/useFonts'

import { PageLoader } from './src/components'
import { LoginConnected } from './src/pages/login'
import { WithServer } from './src/bootstrap/WithServer'

/**
 * If <App> is used as the entry point to the application,
 * it will default to injecting the real services into the
 * application. This entry point can also be used during
 * testing by passing the auth service instance and the
 * `<WithMocks>` component as children.
 * @param {object} props
 * @param {object} [props.authService]
 * @param {React.ReactElement} [props.children]
 * @return {React.ReactNode}
 */
export default function App({
  // Allow overriding the default auth client.
  authService,
  // Allow passing the mock implementation.
  children,
  // Anything else should be passed through to WithServer
  ...rest
}) {
  const { initialized, authenticated, onLogin, onForgotLogin, onLogout, authResponse } =
    useAuthService(authService)

  const theme = themes.light
  const fontsLoaded = useFonts()

  const props = {
    ...rest,
    onSuccess: () => console.log('Authentication not implemented yet.'),
    // Use this callback to handle the case that the user
    // made a request and their authentication is no longer
    // valid. By default, this will simply log out the user
    // but you may need to handle this differently based on
    // your authentication mechanism.
    onAuthFailure: onLogout,
    authResponse,
  }

  // Render the login overlay above the main app.
  return (
    <ThemeProvider theme={theme}>
      {!authenticated && fontsLoaded && (
        <LoginConnected onLogin={onLogin} onForgotLogin={onForgotLogin} />
      )}
      {initialized && fontsLoaded && (
        <React.Suspense fallback={<PageLoader />}>
          { children
            ? React.cloneElement(children, props)
            : <WithServer {...props} />
          }
        </React.Suspense>
      )}
    </ThemeProvider>
  )
}

