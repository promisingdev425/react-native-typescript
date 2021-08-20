import styled, { css } from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native'
import { space, border } from 'styled-system'
import { LinearGradient } from 'expo-linear-gradient'

import { getColor } from '~/theme'

export const Container = styled(TouchableWithoutFeedback)`
  height: 80px;
  justify-content: center;

  ${(props) => {
    if (!props.active) {
      return css`
        border-width: 1px;
        border-color: ${getColor('lightGray')(props)};
      `
    }
    return css`
      overflow: hidden;
    `
  }}

  ${space}
`

export const InnerBase = styled.View.attrs(() => ({
  p: 5,
  borderRadius: 3,
}))`
  height: 80px;
  min-width: 80px;
  justify-content: center;
  overflow: hidden;

  ${(props) => {
    return css`
      opacity: ${props.isPressed ? 0.6 : 1};
    `
  }}

  ${(props) => {
    return css`
      border-width: ${props.active ? 0 : 1}px;
      border-color: ${getColor('lightGray')(props)};
    `
  }}

  ${border}
  ${space}
`

export const Background = styled(LinearGradient).attrs((props) => ({
  colors: [getColor('brandOrange')(props), getColor('brandPink')(props)],
  start: [0.1, 0.45],
  end: [0.9, 0.55],
}))`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  ${space}
`
