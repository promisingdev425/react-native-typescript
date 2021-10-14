import styled from 'styled-components/native'

import { Box } from '../box'

import { IDot as DotProps } from './Dot'

const dotSize = 20
const innerDotSize = 6

export const Container = styled(Box).attrs({
  width: dotSize,
  height: dotSize,
})``

export const DotOuter = styled(Box).attrs(({ color }: DotProps) => {
  return {
    ml: 'xxs',
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    backgroundColor: color,
    opacity: 0.1,
  }
})<DotProps>``

export const DotInner = styled(Box).attrs(({ color }: DotProps) => ({
  ml: 'xxs',
  width: innerDotSize,
  height: innerDotSize,
  borderRadius: innerDotSize / 2,
  backgroundColor: color,
  position: 'absolute',
  left: (dotSize - innerDotSize) / 2,
  top: (dotSize - innerDotSize) / 2,
}))<DotProps>``
