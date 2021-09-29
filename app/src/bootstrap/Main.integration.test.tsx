import React from 'react'
import { View } from 'react-native'

import { ReportAPI } from '~/services'
import { renderWithAllDeps, RenderAPI } from '~/test'
import { Main } from './Main'

describe('Main', () => {
  let screen: RenderAPI
  let reportAPI: ReportAPI

  beforeEach(() => {
    // TEMP until we remove the log statements in Main.tsx
    jest.spyOn(console, 'log').mockImplementation(() => {})
    ;({ reportAPI, ...screen } = renderWithAllDeps(
      <View testID="Root">
        <Main />
      </View>,
    ))
  })

  it('should render the community name.', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('Foo Community'),
    )
  })

  it('should call the Report API getProperties method.', () => {
    expect(reportAPI.getProperties).toHaveBeenCalledTimes(1)
  })
})
