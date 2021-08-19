import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { themes } from '~/theme'

export const withTheme = (Component, name = 'light') => {
  const theme = themes[name]

  return () => {
    return (
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    )
  }
}
