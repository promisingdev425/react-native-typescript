import styled from 'styled-components/native'
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

export interface IAvatar {
  size?: string
}

export const Avatar = styled(Image).attrs((props: IAvatar) => {
  let size: string | number = props.size || 32

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
})<IAvatar & ColorProps & LayoutProps & SpaceProps & BorderProps>`
  ${color}
  ${layout}
  ${space}
  ${border}
`
