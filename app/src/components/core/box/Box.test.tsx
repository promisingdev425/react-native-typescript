import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { Box } from './Box'

describe('Box', function () {
  let screen: RenderAPI

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <Box testID="Box" />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('Box'),
    )
  })
})
