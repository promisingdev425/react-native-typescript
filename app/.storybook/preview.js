import React from 'react'
import { ThemeProvider } from "styled-components/native";

import { themes } from '~/theme'
import useFonts from '~/assets/fonts/useFonts'

const FontLoader = ({children}) => {
  useFonts();
  return children;
}

// Define global decorators.
// https://storybook.js.org/docs/react/writing-stories/decorators
export const decorators = [
  (story) => (
    <ThemeProvider theme={themes.light}>{story()}</ThemeProvider>
  ),
  (story) => <FontLoader>{story()}</FontLoader>,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'light',
        value: '#f5f6fa',
      },
      {
        name: 'dark',
        value: '#555',
      },
    ],
  }
}
