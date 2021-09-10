import styled from 'styled-components/native'

import { Box, Title as TitleCore } from '../../core'

export { Avatar } from '../../core'

export const Container = styled(Box).attrs({
  bg: 'white',
  p: 'sm',
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const Title = styled(TitleCore).attrs({
  pr: 'lg',
})`
  flex: 1;
`
