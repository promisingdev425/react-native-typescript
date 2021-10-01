import React from 'react'

import { Box, Title } from '../../core'
import { IChart } from '../types'
import { getMaxValue } from '../helpers'

import {
  Container,
  Body,
  LineChartView,
  Decorator,
  XAxis,
  YAxis,
  Grid,
} from './styles'

/**
 * `<LineChart>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const LineChart: React.FC<IChart> = ({
  title,
  values,
  inset = 5,
  height = 300,
  strokeWidth = 2,
  strokeColor,
  numberOfTicks = 10,
  gridColor = 'lightGray',
  activeGridIndex,
  activeGridColor = 'brandPink',
  ...rest
}) => {
  const chartData = values.map((item) => item.value)
  const maxValue = getMaxValue(chartData)

  return (
    <Container {...rest} p="sm">
      {title && (
        <Title variant="section" mb="xs">
          {title}
        </Title>
      )}

      <Body height={height}>
        <Box flex={1}>
          <LineChartView
            data={chartData}
            gridMin={0}
            gridMax={maxValue}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            numberOfTicks={numberOfTicks}
            inset={inset}
          >
            <Grid
              strokeColor={gridColor}
              activeColor={activeGridColor}
              activeIndex={activeGridIndex}
              belowChart
            />

            <Decorator strokeColor={strokeColor} strokeWidth={strokeWidth} />
          </LineChartView>

          <XAxis
            data={chartData}
            inset={inset}
            formatLabel={(value, index) => values[index].label}
          />
        </Box>

        <YAxis
          data={chartData}
          inset={inset}
          numberOfTicks={numberOfTicks}
          formatLabel={(value, index) => (maxValue / numberOfTicks) * index}
        />
      </Body>
    </Container>
  )
}
