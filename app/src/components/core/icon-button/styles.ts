import styled from 'styled-components/native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { space, border, SpaceProps, BorderProps } from 'styled-system'

import { Text } from '../../core'

import { getColor, getFontSize, getSpace } from '~/theme'

export const Container = styled(TouchableOpacity)<
  TouchableOpacityProps & BorderProps & SpaceProps
>`
  ${space}
  ${border}
  align-items: center;
`

export const StyledText = styled(Text).attrs((props) => {
  return{
    fontSize: getFontSize('body2')(props),
    color: getColor('black')(props),
    marginTop: getSpace('xxs')(props)
  }
})``
