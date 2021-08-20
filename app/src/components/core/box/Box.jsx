import styled from 'styled-components/native'
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  backgroundColor,
  borderColor,
} from 'styled-system'

const Box = styled.View`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${backgroundColor}
  ${borderColor}
`

export { Box }
