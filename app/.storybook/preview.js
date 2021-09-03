import React from 'react'
import { ThemeProvider } from "styled-components/native";

import { themes } from '~/theme'

// Define global decorators.
// https://storybook.js.org/docs/react/writing-stories/decorators
export const decorators = [
  (story) => (
    <ThemeProvider theme={themes.light}>{story()}</ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
