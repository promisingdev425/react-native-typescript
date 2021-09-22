import React from 'react'
import { View } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'
import { ApplicationIcon } from '~/assets/images'

import { Option } from './Option'

describe('Option', function () {
  let screen
  let handlePress: jest.Mock
  let optionButton
  const option = {
    Icon: ApplicationIcon,
    value: 'application',
    label: 'Engagement Score',
  }

  beforeEach(() => {
    handlePress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <Option option={option} onPress={handlePress} height={48} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    optionButton = screen.getByA11yRole('button')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(optionButton)
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText(option.label),
    )
  })

  it('should click option item', () => {
    fireEvent.press(optionButton)
    expect(handlePress).toHaveBeenLastCalledWith(option)
  })

  it('should click option item', () => {
    fireEvent.press(optionButton)
    expect(handlePress).toHaveBeenLastCalledWith(option)
  })
})
