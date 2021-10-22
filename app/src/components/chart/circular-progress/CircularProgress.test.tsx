import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { CircularProgress } from './CircularProgress'

const fullPercent = 0.85
const halfPercent = 0.5

describe('CircularProgress', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <CircularProgress
          accessibilityLabel="Full Circular Progress"
          progress={fullPercent}
          isFull
        />
        <CircularProgress
          accessibilityLabel="Semi Circular Progress"
          progress={halfPercent}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render progress components', () => {
    const percentComp = screen.getAllByA11yLabel('Progress Percentage')

    expect(screen.getByTestId('Root')).toContainElement(percentComp[0])
    expect(screen.getByTestId('Root')).toContainElement(percentComp[1])
  })

  it('should render progress percentage', () => {
    const percentComp = screen.getAllByA11yLabel('Progress Percentage')

    expect(percentComp[0].props.children).toBe(`${fullPercent * 100} %`)
    expect(percentComp[1].props.children).toBe(`${halfPercent * 100} %`)
  })
})
