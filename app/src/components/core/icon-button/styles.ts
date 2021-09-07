import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system'

export const Container = styled(TouchableOpacity)<
  BorderProps &
    ColorProps &
    FlexboxProps &
    PositionProps &
    LayoutProps &
    SpaceProps
>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`
