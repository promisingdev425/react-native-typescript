import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { PageLoader } from './PageLoader'

describe('PageLoader', function () {
  let screen: RenderAPI

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <PageLoader />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('Loading...'),
    )
  })
})
