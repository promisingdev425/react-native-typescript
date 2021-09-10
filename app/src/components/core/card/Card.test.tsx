import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Card } from './Card'
import { Text } from '../text'

describe('Card', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <Card title="title">
          <Text>Test1</Text>
        </Card>
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('title'),
    )

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('Test1'),
    )
  })
})
