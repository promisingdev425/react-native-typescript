import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { GradientButton } from './GradientButton'

// Component Native Stories
storiesOf('GradientButton', module)
  .add('active', () => (
    <GradientButton title="15" description="KPI SCORE" active />
  ))
  .add('inactive', () => (
    <GradientButton title="12" description="POINTS AWARD" />
  ))
