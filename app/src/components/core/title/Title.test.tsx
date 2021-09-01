import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Title } from './Title'

describe('Title', function () {
  let screen: RenderAPI

  it('should render', () => {
    const InnerScreen = () => (
      <View testID="RootTitle">
        <Title variant="navigation" pt="xs">
          This is [navigation] title
        </Title>
        <Title variant="header" color="positive" pt="xs">
          This is [header] title
        </Title>
        <Title variant="section" color="warning" pt="xs">
          This is [section] title
        </Title>
        <Title variant="body" color="negative" pt="xs">
          This is [body] title
        </Title>
        <Title color="textSecondary" pt="xs">
          This is [body-secondary] title
        </Title>
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)

    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByText('This is [navigation] title'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByText('This is [header] title'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByText('This is [section] title'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByText('This is [body] title'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByText('This is [body-secondary] title'),
    )
  })
})
