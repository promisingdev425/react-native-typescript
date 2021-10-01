import styled from 'styled-components/native'
import {
  LineChart as LineChartUI,
  XAxis as XAxisUI,
  YAxis as YAxisUI,
} from 'react-native-svg-charts'

import { getColor, getFontSize } from '~/theme'

import { Box, IBox } from '../../core'
import { IChart, IDecorator, IGrid, IAxis } from '../types'
import { CircleDecorator, Grid as GridUI } from '../helpers'

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

export const LineChartView = styled(LineChartUI).attrs(
  ({ inset, strokeColor, strokeWidth, ...props }: IChart) => ({
    contentInset: {
      left: inset,
      right: inset,
      top: inset,
    },
    svg: {
      stroke: getColor(strokeColor)(props),
      strokeWidth,
    },
  }),
)<IChart>`
  flex: 1;
`

export const Decorator = styled(CircleDecorator).attrs((props: IDecorator) => ({
  strokeColor: getColor(props.strokeColor)(props),
}))<IDecorator>``

export const XAxis = styled(XAxisUI).attrs(
  ({ inset, textSize, textColor, ...props }: IAxis) => ({
    contentInset: {
      left: inset,
      right: inset,
    },
    svg: {
      fontSize: getFontSize(textSize || 'label2')(props),
      fill: getColor(textColor || 'textSecondary')(props),
    },
  }),
)<IAxis>`
  margin-top: ${(props) => props.inset}px;
  height: ${(props) => props.inset * 3}px;
`

export const YAxis = styled(YAxisUI).attrs(
  ({ inset, textSize, textColor, ...props }: IAxis) => ({
    contentInset: {
      top: inset,
      bottom: inset,
    },
    svg: {
      fontSize: getFontSize(textSize || 'label2')(props),
      fill: getColor(textColor || 'textSecondary')(props),
    },
  }),
)<IAxis>`
  margin-left: ${(props) => props.inset * 2}px;
  margin-bottom: ${(props) => props.inset * 3}px;
`

export const Grid = styled(GridUI).attrs((props: IGrid) => ({
  strokeColor: getColor(props.strokeColor)(props),
  activeColor: getColor(props.activeColor)(props),
}))<IGrid>``
