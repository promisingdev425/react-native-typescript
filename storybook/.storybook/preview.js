import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

import { theme, fonts } from '~/storybook-utils';

export const decorators = [
  withBackgrounds,
  theme,
  fonts,
];
export const parameters = {
  backgrounds: [
    {name: 'white', value: '#fff'},
    {name: 'light', value: '#f5f6fa', default: true},
    {name: 'dark', value: '#fff'},
  ],
};
