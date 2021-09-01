import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { Title } from './Title'

// Component Native Stories
storiesOf('Title', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Navigation(Default)', () => (
    <Title variant="navigation" pt={3}>
      This is [navigation] title
    </Title>
  ))
  .add('Header(Positive)', () => (
    <Title variant="header" color="positive" pt={3}>
      This is [header] title
    </Title>
  ))
  .add('Section(Warning)', () => (
    <Title variant="section" color="warning" pt={3}>
      This is [section] title
    </Title>
  ))
  .add('Body(Negative)', () => (
    <Title variant="body" color="negative" pt={3}>
      This is [body] title
    </Title>
  ))
