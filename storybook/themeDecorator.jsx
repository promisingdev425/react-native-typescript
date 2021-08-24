import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { themes } from '~/theme'

const theme = themes['light']

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator