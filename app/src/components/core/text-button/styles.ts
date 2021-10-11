import styled from 'styled-components/native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { space, border, SpaceProps, BorderProps } from 'styled-system'

import { Text } from '../text'

import { getColor, getFontSize, getTypography } from '~/theme'

export const Container = styled(TouchableOpacity)<
  TouchableOpacityProps & BorderProps & SpaceProps
>`
  ${space}
  ${border}
`

export const StyledText = styled(Text).attrs((props) => {
  return{
    fontSize: getFontSize('body1')(props),
    color: getColor('brandPink')(props),
  }
})``
