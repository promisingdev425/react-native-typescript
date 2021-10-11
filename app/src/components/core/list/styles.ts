import styled from 'styled-components/native'

import { Box } from '../../core'

import { getColor, getSpace } from '~/theme'

export const Container = styled(Box)``

export const Item = styled(Box)`
  flex-direction: row;
`

export const ItemDotContainer = styled(Box).attrs(props => {
  return {
    backgroundColor: getColor('brandPink')(props),
    marginRight: getSpace('xxs')(props),
    width:10,
    heigh:10,
  }
})``
