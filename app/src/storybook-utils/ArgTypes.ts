import { themes } from '~/theme';

// This file contains Storybook ArgType definitions that it's
// unable to automatically detect.

/** react-native view props */
export const viewArgTypes = {
  accessibilityRole: {
    description: 'react-native [aria-role prop](https://docs.expo.dev/versions/latest/react-native/view/#accessibilityrole)',
  },
  accessibilityLabel: {
    description: 'react-native [aria-label prop](https://docs.expo.dev/versions/latest/react-native/view/#accessibilitylabel)',
  },
  'other view props...': {
    description: 'react-native [view props](https://docs.expo.dev/versions/latest/react-native/text/#props)',
  }
}

/** styled-system typography props */
export const textArgTypes = {
  fontSize: {
    options: Object.keys(themes.light.fontSizes),
    control: 'select',
    description: 'styled-system ' +
      '[fontSize prop](https://styled-system.com/api#typography). ' +
      '`fontSize` can accept an arbitrary pixel value or CSS text value ' +
      'but it is preferred that you use a value from the theme.',
  },
  fontFamilyStyle: {
    control: 'select',
    options: Object.keys(themes.light.typography.style).map(s => `style.${s}`),
    description: 'styled-system ' +
      '[fontWeight prop](https://styled-system.com/api#typography). ' +
      'This needs to be one of the font weights loaded for our available fonts.',
  },
  fontFamilyGroup: {
    control: 'select',
    options: Object.keys(themes.light.typography.group).map(s => `group.${s}`),
    description: 'styled-system ' +
      '[fontFamily prop](https://styled-system.com/api#typography). '
  }
}

/** styled-system space props */
export const spaceArgTypes = {
  m: {
    options: [undefined].concat(Object.keys(themes.light.space)),
    control: 'select',
    description: 'styled-components ' +
      '[margin props](https://styled-system.com/api#space). ' +
      'Includes props like `margin`, `marginTop`, etc.',
  },
  p: {
    options: [undefined].concat(Object.keys(themes.light.space)),
    control: 'select',
    description: 'styled-components ' +
      '[padding props](https://styled-system.com/api#space). ' +
      'Includes props like `padding`, `paddingTop`, etc.',
  }
}

/** styled-system color props */
export const colorArgTypes = {
  color: {
    options: [undefined].concat(Object.keys(themes.light.colors)),
    control: 'select',
    description: 'styled-components ' +
      '[color props](https://styled-system.com/api#color). ' +
      'Used for setting the text color of an element.',
  },
}

export const backgroundColorArgTypes = {
  bg: {
    options: [undefined].concat(Object.keys(themes.light.colors)),
    control: 'select',
    description: 'styled-components ' +
      '[background color props](https://styled-system.com/api#color). ' +
      'Used for setting the background color of the component.',
  }
}

/** styled-system background props */
export const backgroundArgTypes = {
  'background*': {
    description: 'styled-components ' +
      '[background utility props](https://styled-system.com/api#background). ' +
      'Includes props like `backgroundImage`, `backgroundPosition`, `backgroundRepeat`, etc.',
  },
}

/** styled-system border props */
export const borderArgTypes = {
  border: {
    control: 'text',
    description: 'styled-components ' +
      '[border props](https://styled-system.com/api#border). ' +
      'Includes props like `border`, `borderWidth`, `borderStyle`, `borderRadius`.',
  }
}
