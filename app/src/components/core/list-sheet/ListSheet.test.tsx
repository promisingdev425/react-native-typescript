import React from 'react'
import { View } from 'react-native'
import {
  render,
  fireEvent,
  waitFor,
  RenderAPI,
} from '@testing-library/react-native'

import { withTheme } from '~/theme/hocs'
import { ApplicationIcon } from '~/assets/images'

import { IOptionData } from './Option'
import { ListSheet } from './ListSheet'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('ListSheet', function () {
  let screen: RenderAPI
  let handleChange: jest.Mock
  let handleChangeAfterHide: jest.Mock
  let handleChangeAfterHide1: jest.Mock
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
    handleChange = jest.fn()
    handleChangeAfterHide = jest.fn()
    handleChangeAfterHide1 = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <ListSheet
          open
          testID="ListSheet"
          title="Leasing Reports"
          options={options}
          itemHeight={48}
          onChange={jest.fn()}
          onChangeAfterHide={handleChangeAfterHide}
          isHideAfterChoose
        />

        <ListSheet
          open
          testID="ListSheet1"
          title="Leasing Reports"
          options={options}
          onChange={handleChange}
          onChangeAfterHide={handleChangeAfterHide1}
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

    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('ListSheet1'),
    )
  })

  it('should click list items', async () => {
    // Get all buttons by role(options are defined as `button` role)
    const buttons = screen.getAllByA11yRole('button')

    // press first option
    fireEvent.press(buttons[0])

    // check if first option has been called after 250ms (expected called moment was 200ms)
    await waitFor(
      () => {
        expect(handleChangeAfterHide).toHaveBeenLastCalledWith(options[0])
      },
      { timeout: 250 },
    )

    // press first option in second ListSheet
    fireEvent.press(buttons[2])
    expect(handleChange).toHaveBeenLastCalledWith(options[0])
  })
})
