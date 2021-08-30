import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PropertyIcon } from '~/assets/images'

import { AppBar } from './AppBar'

// Component Native Stories
storiesOf('AppBar', module)
  .add('Has left and right icons', () => (
    <AppBar
      title="Appbar header"
      leftItem={<PropertyIcon />}
      rightItem={<PropertyIcon />}
    />
  ))
  .add('Has left icon', () => (
    <AppBar title="Appbar header" leftItem={<PropertyIcon />} />
  ))
  .add('Title only', () => <AppBar title="Header title" />)
