import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Text } from './Text'

// Component Native Stories
storiesOf('Text', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <Text>This is generic text component</Text>)
  .add('fontSize: 16, style: Bold', () => (
    <Text fontSize="subtitle2" fontFamilyStyle="style.bold">
      This is generic text component
    </Text>
  ))
