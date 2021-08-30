import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTestProps } from '~/utils'

import { PageLoader as PageLoaderComp } from './PageLoader'

describe('PageLoader', function () {
  let screen: RenderAPI

  beforeEach(() => {
    const PageLoader = withTestProps(PageLoaderComp)
    screen = render(
      <View testID="Root">
        <PageLoader testID="PageLoader" />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('PageLoader'),
    )
  })
})
