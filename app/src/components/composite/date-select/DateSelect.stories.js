import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { DateSelect } from './DateSelect'

// Component Native Stories
storiesOf('DateSelect', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <DateSelect onChange={(date) => console.log(date.toFormat('yyyy MM dd'))} />
  ))
