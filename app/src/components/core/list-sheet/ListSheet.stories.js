import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'
import { Icons } from '~/assets/images'

import { ListSheet } from './ListSheet'

const StatefulListSheet = () => {
  const [open, hideSheet] = useState(true)

  return (
    <ListSheet
      open={open}
      title="Leasing Reports"
      options={[
        {
          Icon: Icons.Application,
          value: 'application',
          label: 'Engagement Score',
        },
        {
          Icon: Icons.Application,
          value: 'responsiveness',
          label: 'Responsiveness',
        },
      ]}
      itemHeight={48}
      onChange={(data) => console.log(data)}
      onChangeAfterHide={(data) => hideSheet(false)}
    />
  )
}

// Component Native Stories
storiesOf('ListSheet', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('default', () => <StatefulListSheet />)
