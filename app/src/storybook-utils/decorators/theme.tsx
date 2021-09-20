import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { themes } from '~/theme'

export const theme = (story) => (
  <ThemeProvider theme={themes.light}>{story()}</ThemeProvider>
)
