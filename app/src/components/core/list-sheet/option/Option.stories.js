import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'
import { ApplicationIcon } from '~/assets/images'

import { Option } from './Option'

// Component Native Stories
storiesOf('Option', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <Option
      height={48}
      option={{
        Icon: ApplicationIcon,
        value: 'application',
        label: 'Engagement Score',
      }}
      onPress={(data) => console.log(data)}
    />
  ))
