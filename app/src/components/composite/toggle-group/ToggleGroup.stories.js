import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { ToggleGroup } from './ToggleGroup'

// Component Native Stories
storiesOf('ToggleGroup', module).add('default', () => (
  <ToggleGroup
    options={[
      { id: 'w', value: 'week', label: 'W', a11yLabel: 'Tap Week' },
      { id: 'm', value: 'month', label: 'M', a11yLabel: 'Tap Month' },
      { id: 'q', value: 'quater', label: 'Q', a11yLabel: 'Tap Quater' },
      { id: 'y', value: 'year', label: 'Y', a11yLabel: 'Tap Year' },
    ]}
    onChange={({ value }) => console.log('click', value)}
    mx="md"
  />
))
