import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'
import { withTheme } from '~/theme/hocs'
import { now, addMonths } from '~/utils/date'

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
    prevButton = screen.getByA11yLabel('Prev Button')
    nextButton = screen.getByA11yLabel('Next Button')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(prevButton)
    expect(screen.getByTestId('Root')).toContainElement(nextButton)
  })

  it('should trigger prev and next button', async () => {
    fireEvent.press(prevButton)
    expect(handleChange).toHaveBeenLastCalledWith(addMonths(now(), -1))
    fireEvent.press(nextButton)
    expect(handleChange).toHaveBeenLastCalledWith(now())
    fireEvent.press(nextButton)
    expect(handleChange).toHaveBeenLastCalledWith(addMonths(now(), 1))
    expect(handleChange).toHaveBeenCalledTimes(3)
  })
})
