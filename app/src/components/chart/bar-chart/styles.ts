import styled from 'styled-components/native'
import { BarChart as BarChartUI, Grid as GridUI } from 'react-native-svg-charts'

import { getColor } from '~/theme'

import { Box, IBox } from '../../core'
import { IChart, IGrid } from '../types'

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

export const BarChartView = styled(BarChartUI).attrs(
  ({ inset, strokeColor, strokeWidth, ...props }: IChart) => ({
    contentInset: {
      left: inset,
      right: inset,
      top: inset,
    },
    svg: {
      stroke: getColor(strokeColor)(props),
      strokeWidth,
      fill: 'rgba(134, 65, 244, 0.8)',
    },
    spacing: 0.2,
  }),
)<IChart>`
  flex: 1;
`

export const Grid = styled(GridUI).attrs((props: IGrid) => ({
  direction: GridUI.Direction.HORIZONTAL,
  svg: {
    stroke: '#333', // getColor(props.strokeColor)(props),
    strokeWidth: 0.5,
  },
}))<IGrid>``
