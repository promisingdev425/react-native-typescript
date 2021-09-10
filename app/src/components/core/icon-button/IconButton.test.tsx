import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'

import { withTheme } from '~/theme/hocs'
import { CircularArrowIcon } from '~/assets/images'

import { IconButton } from './IconButton'

describe('IconButton', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  let button: ReactTestInstance

  beforeEach(() => {
    handlePress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <IconButton onPress={handlePress}>
          <CircularArrowIcon testID="IconButton" />
        </IconButton>
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    button = screen.getByTestId('IconButton')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('IconButton'),
    )
  })

  it('should click', () => {
    fireEvent.press(button)
    expect(handlePress).toHaveBeenCalledTimes(1)
  })
})
