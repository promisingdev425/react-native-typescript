import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Centered } from '~/storybook-utils'

import { PageLoader } from './PageLoader'

storiesOf('Loader', module)
  .addDecorator((cb) => <Centered>{cb()}</Centered>)
  .add('Page Loader', () => <PageLoader />)
