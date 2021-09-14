import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'
import { ApplicationIcon } from '~/assets/images'

import { IOptionData } from './Option'
import { ListSheet } from './ListSheet'

describe('ListSheet', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  const options: IOptionData[] = [
    {
      Icon: ApplicationIcon,
      value: 'application',
      label: 'Engagement Score',
    },
    {
      Icon: ApplicationIcon,
      value: 'responsiveness',
      label: 'Responsiveness',
    },
  ]

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="Root">
        <ListSheet
          testID="ListSheet"
          title="Leasing Reports"
          options={options}
          itemHeight={48}
          onChange={handlePress}
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('ListSheet'),
    )
  })
})
