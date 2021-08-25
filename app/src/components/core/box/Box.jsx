import styled from 'styled-components/native'
import { View } from 'react-native'
import { space, color, layout, flexbox, border, position } from 'styled-system'

const Box = styled(View)`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export { Box }
