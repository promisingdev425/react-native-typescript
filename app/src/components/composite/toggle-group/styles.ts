import styled from 'styled-components/native'
import { TouchableWithoutFeedback } from 'react-native'

import { IToggleGroup } from './ToggleGroup'
import { IToggleButton } from './ToggleButton'
import { Box, Title as TitleCore } from '../../core'

export const Container = styled(Box).attrs((props: IToggleGroup) => ({
  bg: 'clear',
  borderRadius: props.height / 2,
  borderWidth: 1,
  borderColor: 'lightGray',
}))`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || 32}px;
`

export const Title = styled(TitleCore).attrs((props: IToggleButton) => ({
  color: props.active ? 'brandPink' : 'textSecondary',
  lineHeight: props.height,
}))`
  flex: 1;
  text-align: center;
`

export const ButtonContainer = styled(TouchableWithoutFeedback)``
