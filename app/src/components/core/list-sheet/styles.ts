import styled, { css } from 'styled-components/native'
import {
  TouchableWithoutFeedbackProps,
  Dimensions,
  Platform,
} from 'react-native'
import { getBottomSpace as getBottomSpaceX } from 'react-native-iphone-x-helper'

import { getMetrics } from '~/theme'
import PickingService from '~/services/picking'

import { Box, IBox } from '../box'

export const getMaxHeight = (props) => {
  const { height } = Dimensions.get('window')
  return props.maxHeight || height * 0.9
}

export const getBottomSpace = (props) => {
  let bottomSpace = getMetrics('bottomSpace')(props)
  /* istanbul ignore next */
  if (!bottomSpace) {
    bottomSpace = getBottomSpaceX()
  }

  return bottomSpace
}

export const StyledModal = styled(Box)`
  bottom: 0;
  width: 100%;
  ${PickingService.forPlatform({
    default: css`
      position: absolute;
    `,
    web: css`
      position: fixed;
    `,
  })}
`

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const Overlay = styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>``

export const OverlayBackground = styled(Box).attrs({
  bg: 'black',
})<IBox>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${PickingService.forPlatform({
    default: css`
      position: absolute;
    `,
    web: css`
      position: fixed;
    `,
  })}
`

export const Body = styled(Box).attrs((props) => {
  return {
    pb: getMetrics('bottomSpace')(props),
    bg: 'white',
    btlr: 3,
    btrr: 3,
  }
})`
  ${PickingService.forPlatform({
    default: css`
      margin: 0;
    `,
    web: css`
      margin: 0 auto;
    `,
  })}
  ${PickingService.forPlatform({
    default: css`
      min-width: auto;
    `,
    web: css`
      min-width: 300;
    `,
  })}
`

export const Header = styled(Box).attrs({
  px: 'md',
  height: 60,
})`
  flex-direction: row;
  align-items: center;
`

export const Content = styled.ScrollView.attrs((props) => ({
  keyboardShouldPersistTaps: 'handled',

  contentContainerStyle: {
    paddingBottom: getBottomSpace(props),
  },
}))``
