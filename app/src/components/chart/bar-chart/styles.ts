import styled from 'styled-components/native'
import { LineChart as LineChartUI } from 'react-native-svg-charts'

import { getColor, getMetrics, getSpace } from '~/theme'

import { Box, IBox } from '../../core'
import { IChart, IGrid } from '../types'
import { Grid as GridUI } from '../helpers'

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

export const ChartView = styled(LineChartUI).attrs(
  ({ data, inset, strokeColor, strokeWidth, ...props }: IChart) => {
    const screenWidth = getMetrics('screenWidth')(props)
    const elementWidth =
      (screenWidth - getSpace('sm')(props) * 2 - 30) / data.length

    return {
      contentInset: {
        left: elementWidth / 2 + inset,
        right: elementWidth / 2 + inset,
        top: inset,
      },
      svg: {
        stroke: getColor(strokeColor)(props),
        strokeWidth,
      },
    }
  },
)<IChart>`
  flex: 1;
`

/* istanbul ignore next */
export const Grid = styled(GridUI).attrs((props: IGrid) => ({
  strokeColor: getColor(props.strokeColor)(props),
  activeColor: getColor(props.activeColor)(props),
}))<IGrid>``
