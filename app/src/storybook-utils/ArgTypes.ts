import { themes } from '~/theme'

// This file contains Storybook ArgType definitions that it's
// unable to automatically detect.

/** react-native view props */
export const viewArgTypes = {
  accessibilityRole: {
    description:
      'react-native [aria-role prop](https://docs.expo.dev/versions/latest/react-native/view/#accessibilityrole)',
  },
  accessibilityLabel: {
    description:
      'react-native [aria-label prop](https://docs.expo.dev/versions/latest/react-native/view/#accessibilitylabel)',
  },
  'View props...': {
    description:
      'react-native [View component props](https://docs.expo.dev/versions/latest/react-native/text/#props)',
  },
}

/** styled-system typography props */
export const textArgTypes = {
  fontSize: {
    options: Object.keys(themes.light.fontSizes),
    control: { type: 'select' },
    description:
      'styled-system ' +
      '[fontSize prop](https://styled-system.com/api#typography). ' +
      '`fontSize` can accept an arbitrary pixel value or CSS text value ' +
      'but it is preferred that you use a value from the theme.',
  },
  fontFamilyStyle: {
    control: { type: 'select' },
    options: Object.keys(themes.light.typography.style).map(
      (s) => `style.${s}`,
    ),
    description:
      'styled-system ' +
      '[fontWeight prop](https://styled-system.com/api#typography). ' +
      'This needs to be one of the font weights loaded for our available fonts.',
  },
  fontFamilyGroup: {
    control: { type: 'select' },
    options: Object.keys(themes.light.typography.group).map(
      (s) => `group.${s}`,
    ),
    description:
      'styled-system ' +
      '[fontFamily prop](https://styled-system.com/api#typography). ',
  },
}

/** styled-system space props */
export const spaceArgTypes = {
  m: {
    options: [undefined].concat(Object.keys(themes.light.space)),
    control: { type: 'select' },
    description:
      'styled-system ' +
      '[margin props](https://styled-system.com/api#space). ' +
      'Includes props like `margin`, `marginTop`, etc.',
  },
  p: {
    options: [undefined].concat(Object.keys(themes.light.space)),
    control: { type: 'select' },
    description:
      'styled-system ' +
      '[padding props](https://styled-system.com/api#space). ' +
      'Includes props like `padding`, `paddingTop`, etc.',
  },
}

/** styled-system color props */
export const colorArgTypes = {
  color: {
    options: [undefined].concat(Object.keys(themes.light.colors)),
    control: { type: 'select' },
    description:
      'styled-system ' +
      '[color props](https://styled-system.com/api#color). ' +
      'Used for setting the text color of an element.',
  },
}

export const backgroundColorArgTypes = {
  bg: {
    options: [undefined].concat(Object.keys(themes.light.colors)),
    control: { type: 'select' },
    description:
      'styled-system ' +
      '[background color props](https://styled-system.com/api#color). ' +
      'Used for setting the background color of the component.',
  },
}

/** styled-system background props */
export const backgroundArgTypes = {
  'background props...': {
    description:
      'styled-system ' +
      '[background utility props](https://styled-system.com/api#background). ' +
      'Includes props like `backgroundImage`, `backgroundPosition`, `backgroundRepeat`, etc.',
  },
}

/** styled-system border props */
export const borderArgTypes = {
  'border props...': {
    control: 'text',
    description:
      'styled-system ' +
      '[border props](https://styled-system.com/api#border). ' +
      'Includes props like `border`, `borderWidth`, `borderStyle`, `borderRadius`.',
  },
}

/** styled-system layout props */
export const layoutArgTypes = {
  'layout props...': {
    description:
      'styled-system ' +
      '[layout props](https://styled-system.com/api#layout). ' +
      'Includes props like `width`, `display`, `overflow`, etc.',
  },
}

/** styled-system flex props */
export const flexboxArgTypes = {
  'flexbox props...': {
    description:
      'styled-system ' +
      '[flexbox props](https://styled-system.com/api#flexboxk). ' +
      'Includes props like `flex`, `flexDirection`, `alignItems`, etc.',
  },
}

/** styled-system position props */
export const positionArgTypes = {
  'position props...': {
    description:
      'styled-system ' +
      '[position props](https://styled-system.com/api#position). ' +
      'Includes props like `position`, `top`, `zIndex`, etc.',
  },
}
