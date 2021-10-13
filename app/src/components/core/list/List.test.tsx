import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { List } from './List'

import { Text } from '../text'

describe('List', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <List testID="List">
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </List>
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByTestId('List'))

    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByText('Item 1'))

    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByText('Item 2'))
  })
})
