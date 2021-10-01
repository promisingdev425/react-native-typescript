import styled from 'styled-components/native'
import { getColor } from '~/theme'
import {
  LineChart as LineChartUI,
  XAxis as XAxisUI,
  YAxis as YAxisUI,
} from 'react-native-svg-charts'

import { IChart, IDecorator, IGrid } from '../types'
import { CircleDecorator, Grid as GridUI } from '../helpers'

import { Box, IBox } from '../../core'

export const Container = styled(Box)<IBox>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

export const Body = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: row;
`

export const LineChartView = styled(LineChartUI).attrs((props: IChart) => ({
  contentInset: { left: 5, right: 5, top: 5 },
  svg: {
    stroke: getColor(props.strokeColor)(props),
    strokeWidth: props.strokeWidth,
  },
}))<IChart>`
  flex: 1;
`

export const Decorator = styled(CircleDecorator).attrs((props: IDecorator) => ({
  strokeColor: getColor(props.strokeColor)(props),
}))<IDecorator>``

export const XAxis = styled(XAxisUI).attrs({
  contentInset: { left: 5, right: 5 },
  svg: { fontSize: 10, fill: 'black' },
})`
  margin-top: 5px;
  height: 15px;
`

export const YAxis = styled(YAxisUI).attrs({
  contentInset: { top: 5, bottom: 5 },
  svg: { fontSize: 10, fill: 'grey' },
})`
  margin-left: 10px;
  margin-bottom: 15px;
`

export const Grid = styled(GridUI).attrs((props: IGrid) => ({
  strokeColor: getColor(props.strokeColor)(props),
  activeColor: getColor(props.activeColor)(props),
}))<IGrid>``
