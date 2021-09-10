import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'
import {
  space,
  color,
  background,
  border,
  SpaceProps,
  ColorProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system'

export type IBox = ViewProps &
  SpaceProps &
  ColorProps &
  BackgroundProps &
  BorderProps

const Box = styled(View)<IBox>`
  ${space}
  ${color}
  ${background}
  ${border}
`

export { Box }
