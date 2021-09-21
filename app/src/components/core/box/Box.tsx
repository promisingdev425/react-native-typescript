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

/**
 * `<Box>` wraps the `react-native.View` component
 * in our theme with `styled-system` props.
 * Use `Box` in place of the standard `View` component.
 */
export const Box = styled(View)<IBox>`
  ${space}
  ${color}
  ${background}
  ${border}
`

