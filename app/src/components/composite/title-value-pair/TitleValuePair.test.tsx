import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI, within } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { TitleValuePair } from './TitleValuePair'

describe('TitleValuePair', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <TitleValuePair
          value={100}
          isPercentage={true}
          subText="Occupancy"
          hasDot={true}
          dotColor="red"
          testID="TitleValuePair" />
        <TitleValuePair
          value={2.4}
          isPercentage={false}
          subText="Hello"
          hasDot={false}
          testID="TitleValuePair1" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('TitleValuePair'),
    )
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('TitleValuePair1'),
    )
  })

  it('should be percentage, show dot and display subtext', () => {
    expect(screen.getByTestId('TitleValuePair')).toContainElement(
      screen.getByText('100%'),
    )
    expect(screen.getByTestId('TitleValuePair')).toContainElement(
      screen.getByTestId('Dot'),
    )
    expect(screen.getByTestId('TitleValuePair')).toContainElement(
      screen.getByText('Occupancy'),
    )
  })

  it('should not be percentage and not have a dot', () => {
    expect(within(screen.getByTestId('TitleValuePair1')).queryByText('2.4%')).toBeNull()
    expect(within(screen.getByTestId('TitleValuePair1')).queryByTestId('Dot')).toBeNull()
  })

})
