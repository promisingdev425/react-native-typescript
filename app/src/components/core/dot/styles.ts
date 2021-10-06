import styled from 'styled-components/native'

import { Box } from '../box'

import { IDot as DotProps } from './Dot'

interface ContainerProps {
  size: number
}

export const Container = styled(Box).attrs(({ size }: ContainerProps) => {
  return {
    width: size,
    height: size,
  }
})<ContainerProps>``

export const DotOuter = styled(Box).attrs(({ size, color }: DotProps) => {
  return {
    ml: 'xxs',
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
    opacity: 0.1,
  }
})<DotProps>``

export const DotInner = styled(Box).attrs(({ size, color }: DotProps) => {
  const scale = 3
  return {
    ml: 'xxs',
    width: size / scale,
    height: size / scale,
    borderRadius: size / scale,
    backgroundColor: color,
    position: 'absolute',
    left: size / scale,
    top: size / scale,
  }
})<DotProps>``
