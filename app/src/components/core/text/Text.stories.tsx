import React from 'react'
import { ScrollView } from 'react-native'

import { themes } from '~/theme'
import { textArgTypes, colorArgTypes, backgroundColorArgTypes } from '~/storybook-utils'

import { Box } from '../box'
import { Text } from './Text'

console.log('themes?', themes.light);

export default {
  title: 'Components/Core/Text',
  component: Text,
  argTypes: {
    ...textArgTypes,
    ...colorArgTypes,
    ...backgroundColorArgTypes,
    'Text props...': {
      description: 'You can also pass any props of the react-native ' +
        '[Text component](https://docs.expo.dev/versions/latest/react-native/text/#props)',
    }
  },
  args: {
    children: 'Use the Text component to display text',
  },
}

export const Template = (props) => <Text {...props} />
Template.storyName = 'Text'

export const FontVariations = () => (
  <ScrollView>
    {Object.keys(themes.light.fontSizes).flatMap((size, i) =>
      Object.keys(themes.light.typography.style)
        .map((weight) => (
          <Text
            fontSize={size}
            fontFamilyStyle={`style.${weight}`}
            p="xs"
            key={size + weight}
            display="flex"
          >
            {size} {weight}: The quick brown fox jumped...
          </Text>
        ))
        .concat([<Box p="sm" key={`spacer${i}`} />]),
    )}
  </ScrollView>
)
