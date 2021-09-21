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

/** styled-system space props */
export const spaceArgTypes = {
  m: {
    description: 'styled-components [margin props](https://styled-system.com/api#space)',
    control: 'text'
  },
  p: {
    description: 'styled-components [padding props](https://styled-system.com/api#space)',
    control: 'text'
  }
}

/** styled-system color props */
export const colorArgTypes = {
  color: {
    description: 'styled-components [color props](https://styled-system.com/api#color)',
    control: 'text'
  },
  bg: {
    description: 'styled-components [background color props](https://styled-system.com/api#color)',
    control: 'text'
  }
}

/** styled-system background props */
export const backgroundArgTypes = {
  'backgroundImage': {
    description: 'styled-components [background utility props](https://styled-system.com/api#background)',
    control: 'text',
  },
  'backgroundSize': {
    description: 'styled-components [background utility props](https://styled-system.com/api#background)',
    control: 'text',
  },
  'backgroundPosition': {
    description: 'styled-components [background utility props](https://styled-system.com/api#background)',
    control: 'text',
  },
  'backgroundRepeat': {
    description: 'styled-components [background utility props](https://styled-system.com/api#background)',
    control: 'text',
  },
}

/** styled-system border props */
export const borderArgTypes = {
  border: {
    description: 'styled-components [border props](https://styled-system.com/api#border)',
    control: 'text',
  }
}
