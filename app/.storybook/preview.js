import React from 'react'
import { addDecorator } from "@storybook/react";
import { WithThemeProvider } from "storybook-addon-styled-components-themes";

import { themes } from '~/theme'

const theme = themes['light']

// addParameters({
//   styledComponentsThemes: {
//     /**
//      * Themes
//      */
//     themes: [ThemeA, ThemeB],
//     /**
//      * Theme to start on - index - optional
//      */
//     initialTheme: 1, // optional
//     /**
//      *  Key for show name of theme - optional
//      */
//     label: 'name', // optional
//   },
// });

addDecorator(story => (
  <WithThemeProvider>
      {story()}
  </WithThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  styledComponentsThemes: {
    /**
     * Themes
     */
    themes: [theme],
  },
}
