import styled from 'styled-components/native'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import { getSpace } from '~/theme'

import { Box, IBox } from '../../box'
import { Text } from '../../text'

interface IPressState {
  isPressed: boolean
}

export const Touchable = styled(TouchableWithoutFeedback).attrs({
  accessibilityRole: 'button',
})<TouchableWithoutFeedbackProps & IPressState>``

export const Container = styled(Box).attrs((props: IPressState) => ({
  bg: props.isPressed ? 'lightGray' : 'white',
  px: 'md',
}))<IBox & IPressState>`
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const BorderLine = styled(Box).attrs({
  bg: 'lightGray',
})`
  position: absolute;
  bottom: 0;
  left: ${(props) => getSpace('md')(props)}px;
  right: ${(props) => getSpace('md')(props)}px;
  height: 1px;
`

export const Label = styled(Text).attrs({
  fontSize: 'subtitle2',
  px: 'sm',
  noselect: true,
})`
  flex: 1;
`
