import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { PropertyIcon } from '~/assets/images'

import { AppBar } from './AppBar'

// Component Native Stories
storiesOf('AppBar', module)
  .add('Has Left icon', () => (
    <AppBar title="Appbar header" leftItem={<PropertyIcon />} />
  ))
  .add('Has Left icon', () => <AppBar title="Header title" />)
