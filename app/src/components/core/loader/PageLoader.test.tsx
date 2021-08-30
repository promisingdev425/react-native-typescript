import React from 'react'
import { View } from 'react-native'
import { render, RenderAPI } from '@testing-library/react-native'
import { withTestProps } from '~/utils'

import { PageLoader } from './PageLoader'

const WrappedPageLoader = withTestProps(PageLoader)

describe('PageLoader', function () {
  let screen: RenderAPI

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <WrappedPageLoader testID="PageLoader" />
      </View>,
    )
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('PageLoader'),
    )
  })
})
