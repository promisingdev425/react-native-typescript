import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'
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
    SpaceProps &
    ViewProps
>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export { Box }
