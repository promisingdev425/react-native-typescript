import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { PageLoader } from './PageLoader.jsx'

describe('PageLoader', function () {
  let screen

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <PageLoader testID="PageLoader" />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('PageLoader'),
    )
  })
})
