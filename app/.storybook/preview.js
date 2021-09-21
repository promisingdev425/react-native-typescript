import { theme, fonts } from '~/storybook-utils'

// Define global decorators.
// https://storybook.js.org/docs/react/writing-stories/decorators
export const decorators = [theme, fonts]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: 'open',
    }
  },
  backgrounds: {
    default: 'light',
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
  },
}
