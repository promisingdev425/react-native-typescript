import styled from 'styled-components/native'
import get from 'lodash/get'
import { Image } from 'react-native'
import {
  space,
  color,
  layout,
  border,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
} from 'styled-system'

export const Avatar = styled(Image).attrs((props) => {
  let size: string | number = get(props, 'size', 32)

  switch (size) {
    case 'xs':
      size = 24
      break
    case 'md':
      size = 48
      break
    case 'lg':
      size = 64
      break
    case 'sm':
    default:
      size = 32
      break
  }

  return {
    size,
    borderRadius: size / 2,
  }
})<ColorProps & LayoutProps & SpaceProps & BorderProps>`
  ${color}
  ${layout}
  ${space}
  ${border}
`
