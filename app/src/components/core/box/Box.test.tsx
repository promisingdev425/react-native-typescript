import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { Box } from './Box.jsx'

describe('Box', function () {
  let screen

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
