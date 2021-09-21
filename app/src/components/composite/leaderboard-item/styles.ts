import styled from 'styled-components/native'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import { Box, IBox, Text } from '../../core'

interface IPressState {
  isPressed: boolean
}

export const Touchable = styled(TouchableWithoutFeedback).attrs({
  accessibilityRole: 'button',
})<TouchableWithoutFeedbackProps & IPressState>``

export const Container = styled(Box).attrs((props: IPressState) => ({
  bg: props.isPressed ? 'lightGray' : 'white',
  p: 'sm',
  borderRadius: 'sm',
}))<IBox & IPressState>`
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const Label = styled(Text).attrs({
  px: 'sm',
  noselect: true,
})`
  flex: 1;
`

export const TopRank = styled(Box).attrs({
  width: 48,
  height: 45,
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TopRankLabel = styled(Text).attrs({
  fontSize: 'subtitle1',
  color: 'white',
  fontFamilyStyle: 'style.bold',
})`
  position: absolute;
`

export const RankLabel = styled(Text).attrs({
  fontSize: 'subtitle2',
  fontFamilyStyle: 'style.bold',
})``
