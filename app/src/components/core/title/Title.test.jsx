import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import { withTheme } from '~/theme/hocs'

import { Title } from './Title.jsx'

describe('Title', function () {
  let screen

  it('should render', () => {
    const InnerScreen = () => (
      <View testID="RootTitle">
        <Title testID="Title1" variant="navigation" pt={3}>
          This is [navigation] title
        </Title>
        <Title testID="Title2" variant="header" color="positive" pt={3}>
          This is [header] title
        </Title>
        <Title testID="Title3" variant="section" color="warning" pt={3}>
          This is [section] title
        </Title>
        <Title testID="Title4" variant="body" color="negative" pt={3}>
          This is [body] title
        </Title>
        <Title testID="Title5" color="textSecondary" pt={3}>
          This is [body] title
        </Title>
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)

    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByTestId('Title1'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByTestId('Title2'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByTestId('Title3'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByTestId('Title4'),
    )
    expect(screen.getByTestId('RootTitle')).toContainElement(
      screen.getByTestId('Title5'),
    )
  })
})
