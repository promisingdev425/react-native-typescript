import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Splash } from './Splash'

// Component Native Stories
storiesOf('Splash Screen', module).add('light theme', () => <Splash />)
