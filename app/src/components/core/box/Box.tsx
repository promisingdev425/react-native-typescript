import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'
import {
  space,
  color,
  background,
  border,
  layout,
  SpaceProps,
  ColorProps,
  BackgroundProps,
  BorderProps,
  LayoutProps,
} from 'styled-system'

export type IBox = ViewProps &
  SpaceProps &
  ColorProps &
  BackgroundProps &
  BorderProps &
  LayoutProps

const Box = styled(View)<IBox>`
  ${space}
  ${color}
  ${background}
  ${border}
  ${layout}
`

export { Box }
