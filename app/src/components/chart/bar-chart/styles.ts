import styled from 'styled-components/native'
import { BarChart as BarChartUI } from 'react-native-svg-charts'

import { getColor } from '~/theme'

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

export const BarChartView = styled(BarChartUI).attrs(
  ({ data, inset, strokeColor, strokeWidth, ...props }: IChart) => {
    return {
      animate: true,
      contentInset: {
        left: inset,
        right: inset,
        top: inset,
      },
    }
  },
)<IChart>`
  flex: 1;
`

export const Grid = styled(GridUI).attrs((props: IGrid) => ({
  strokeColor: getColor(props.strokeColor)(props),
  activeColor: getColor(props.activeColor)(props),
}))<IGrid>``
