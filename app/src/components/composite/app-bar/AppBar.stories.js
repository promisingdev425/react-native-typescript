import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Icons } from '~/assets'

import { AppBar } from './AppBar'

// Component Native Stories
storiesOf('AppBar', module)
  .add('Has left and right icons', () => (
    <AppBar
      title="Appbar header"
      leftItem={<Icons.Property />}
      rightItem={<Icons.Property />}
    />
  ))
  .add('Has left icon', () => (
    <AppBar title="Appbar header" leftItem={<Icons.Property />} />
  ))
  .add('Title only', () => <AppBar title="Header title" />)
