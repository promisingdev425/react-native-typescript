import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'
import { withTheme } from '~/theme/hocs'

import { DateSelect } from './DateSelect'

describe('DateSelect', function () {
  let screen: RenderAPI
  let prevButton: ReactTestInstance
  let nextButton: ReactTestInstance
  let handleChange: jest.Mock

  beforeEach(() => {
    handleChange = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <DateSelect onChange={handleChange} />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    prevButton = screen.getByTestId('date-select-prev')
    nextButton = screen.getByTestId('date-select-next')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(prevButton)
    expect(screen.getByTestId('Root')).toContainElement(nextButton)
  })

  it('should trigger prev and next button', async () => {
    fireEvent.press(prevButton)
    fireEvent.press(nextButton)
    expect(handleChange).toHaveBeenCalledTimes(2)
  })
})
