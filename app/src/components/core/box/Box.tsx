import styled from 'styled-components/native'
import { View } from 'react-native'
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

const Box = styled(View)<
  BorderProps &
    ColorProps &
    FlexboxProps &
    PositionProps &
    LayoutProps &
    SpaceProps
>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export { Box }
