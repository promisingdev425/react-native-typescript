import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { ToggleGroup } from './ToggleGroup'

// Component Native Stories
storiesOf('ToggleGroup', module).add('default', () => (
  <ToggleGroup
    options={[
      { id: 'w', value: 'week', label: 'W' },
      { id: 'm', value: 'month', label: 'M' },
      { id: 'q', value: 'quater', label: 'Q' },
      { id: 'y', value: 'year', label: 'Y' },
    ]}
    onChange={({ value }) => console.log('click', value)}
    mx="md"
  />
))
