import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { themes } from '~/theme'

const theme = themes['light']

console.log('theme:', theme)

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator