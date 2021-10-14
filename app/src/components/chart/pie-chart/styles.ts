import styled from 'styled-components/native'

import { getMetrics } from '~/theme'

import { Box, IBox } from '../../core'

interface IDot extends IBox {
  size: number
}

export const Container = styled(Box).attrs({
  p: 'sm',
})<IBox>`
  text-align: center;
  background-color: white;
  max-width: ${(props) => getMetrics('screenWidth')(props)}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ChartView = styled(Box)<IBox>`
  position: relative;
`

export const Overview = styled(Box)`
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

export const ChartInfo = styled(Box)`
  display: flex;
  flex-direction: row;
`

export const Meta = styled(Box).attrs({
  p: 'sm',
})<IBox>`
  flex: 1;
`

export const Dot = styled(Box).attrs((props: IDot) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
}))<IDot>``
