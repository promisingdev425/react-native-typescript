import styled, { css } from 'styled-components/native'
import { border } from 'styled-system'
import { LinearGradient } from 'expo-linear-gradient'

import PickingService from '~/services/picking'
import { getColor } from '~/theme'

import { Box, Title as TitleCore } from '../../core'
import { IToggleButtonBase } from './ToggleButton'

export { TouchableWithoutFeedback as ButtonContainer } from 'react-native'

export const Container = styled(Box).attrs((props: IToggleButtonBase) => ({
  bg: 'clear',
  borderRadius: props.height / 2,
  borderWidth: 1,
  borderColor: 'lightGray',
}))<IToggleButtonBase>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}px;
`

export const Title = styled(TitleCore).attrs((props: IToggleButtonBase) => ({
  color: props.active ? 'white' : 'textSecondary',
  lineHeight: `${props.height - 2}px`,
}))<IToggleButtonBase>`
  flex: 1;
  text-align: center;
`

export const ButtonBack = styled(LinearGradient).attrs(
  (props: IToggleButtonBase) => ({
    colors: [
      getColor(props.active ? 'brandOrange' : 'clear')(props),
      getColor(props.active ? 'brandPink' : 'clear')(props),
    ],
    start: [0.1, 0.45],
    end: [0.9, 0.55],
    borderRadius: props.height / 2,
  }),
)<IToggleButtonBase>`
  flex: 1;

  ${PickingService.forPlatform({
    web: css`
      cursor: pointer;
    `,
  })}

  ${border}
`
