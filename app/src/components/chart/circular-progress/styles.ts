import styled from 'styled-components/native'

import { getMetrics } from '~/theme'

import { Box, IBox } from '../../core'

interface IOverview extends IBox {
  strokeWidth: number
}

interface IContainer extends IBox {
  width: number
  isFull: boolean
}

export const Container = styled(Box).attrs(({ width, isFull }: IContainer) => ({
  width,
  height: isFull ? width : width * 0.5,
}))<IContainer>`
  text-align: center;
  background-color: white;
  max-width: ${(props) => getMetrics('screenWidth')(props)}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const ChartView = styled(Box)<IBox>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Overview = styled(Box)<IOverview>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Meta = styled(Box).attrs({
  p: 'sm',
})<IBox>`
  max-width: 130px;
`
