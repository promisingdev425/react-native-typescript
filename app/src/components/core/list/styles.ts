import styled from 'styled-components/native'

import { Box } from '../box'

import { getColor, getSpace } from '~/theme'

export const Container = styled(Box)``

const dotSize = 5

export const Item = styled(Box).attrs(props => {
  return {
    flexDirection: 'row',
    marginBottom: getSpace('sm')(props),
  }
})``

export const Dot = styled(Box).attrs(props => {
  return {
    backgroundColor: getColor('brandPink')(props),
    marginRight: getSpace('sm')(props),
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    alignSelf: 'center'
  }
})``
