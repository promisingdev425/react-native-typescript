import React from 'react'
import { ScrollView } from 'react-native'

import { themes } from '~/theme'
import { centered } from '~/storybook-utils'

import { Box } from '../box'
import { Text } from './Text'

export default {
  title: 'Components/Core/Text',
  component: Text,
  argTypes: {
    fontSize: {
      options: Object.keys(themes.light.fontSizes),
      control: { type: 'select' },
    },
    fontFamilyStyle: {
      options: Object.keys(themes.light.typography.style).map(
        (s) => `style.${s}`,
      ),
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    children: 'Use the Text component to display text',
  },
}

export const Template = (props) => <Text {...props} />
Template.storyName = 'Text'
Template.decorators = [centered]

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
