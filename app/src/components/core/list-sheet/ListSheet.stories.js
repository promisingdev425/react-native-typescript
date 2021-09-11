import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'
import { ApplicationIcon } from '~/assets/images'

import { ListSheet } from './ListSheet'

// Component Native Stories
storiesOf('ListSheet', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => (
    <ListSheet
      title="Leasing Reports"
      options={[
        {
          Icon: ApplicationIcon,
          value: 'application',
          label: 'Engagement Score',
        },
        {
          Icon: ApplicationIcon,
          value: 'responsiveness',
          label: 'Responsiveness',
        },
      ]}
      itemHeight={48}
      onChange={(data) => console.log(data)}
    />
  ))
