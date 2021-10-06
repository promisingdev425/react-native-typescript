import styled from 'styled-components/native'

import { Box } from '../box'

import { IDot as DotProps } from './Dot'

const dotSize = 20

interface ContainerProps {
  size: number
}

export const Container = styled(Box).attrs({
  width: dotSize,
  height: dotSize
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

export const DotInner = styled(Box).attrs(({ color }: DotProps) => {
  const scale = 3
  return {
    ml: 'xxs',
    width: dotSize / scale,
    height: dotSize / scale,
    borderRadius: dotSize / scale,
    backgroundColor: color,
    position: 'absolute',
    left: dotSize / scale,
    top: dotSize / scale,
  }
})<DotProps>``
