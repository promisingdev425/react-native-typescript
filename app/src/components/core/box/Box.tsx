import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'
import {
  space,
  color,
  background,
  border,
  layout,
  position,
  SpaceProps,
  ColorProps,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
} from 'styled-system'

export type IBox = ViewProps &
  SpaceProps &
  ColorProps &
  BackgroundProps &
  BorderProps &
  LayoutProps &
  PositionProps

const Box = styled(View)<IBox>`
  ${space}
  ${color}
  ${background}
  ${border}
  ${layout}
  ${position}
`

export { Box }
