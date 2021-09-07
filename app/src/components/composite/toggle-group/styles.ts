import styled from 'styled-components/native'
import { border } from 'styled-system'
import { LinearGradient } from 'expo-linear-gradient'

import { getColor } from '~/theme'

import { IToggleGroup } from './ToggleGroup'
import { IToggleButton } from './ToggleButton'
import { Box, Title as TitleCore } from '../../core'

export { TouchableWithoutFeedback as ButtonContainer } from 'react-native'

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
  height: ${(props) => props.height}px;
`

export const Title = styled(TitleCore).attrs((props: IToggleButton) => ({
  color: props.active ? 'white' : 'textSecondary',
  lineHeight: `${props.height - 2}px`,
}))`
  flex: 1;
  text-align: center;
`

export const ButtonBack = styled(LinearGradient).attrs(
  (props: IToggleButton) => ({
    colors: [
      getColor(props.active ? 'brandOrange' : 'clear')(props),
      getColor(props.active ? 'brandPink' : 'clear')(props),
    ],
    start: [0.1, 0.45],
    end: [0.9, 0.55],
    borderRadius: `${props.height / 2}px`,
  }),
)`
  flex: 1;

  ${border}
`
