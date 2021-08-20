import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { GradientButton } from './GradientButton.jsx'

// Component Native Stories
storiesOf('GradientButton', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <GradientButton />)
