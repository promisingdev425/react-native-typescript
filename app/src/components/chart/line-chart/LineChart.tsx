import React, { useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle } from 'react-native'
import { Circle } from 'react-native-svg'

import { useTheme } from '~/theme'

import { Box, Title } from '../../core'
import { IChart, IDecorator, ChartType } from '../types'
import { getMaxValue, XAxis, YAxis } from '../helpers'

import { Container, Body, LineChartView, Grid } from './styles'

/**
 * `<CircleRenderer>`
 * istanbul ignore next
 */
const CircleRenderer = ({
  radius = 4,
  fill = 'white',
  strokeColor = '#000',
  strokeWidth = 2,
  data,
  x,
  y,
}: IDecorator) => {
  const theme = useTheme()

  return (
    <>
      {data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={radius}
          stroke={theme.colors[strokeColor]}
          strokeWidth={strokeWidth}
          fill={fill}
        />
      ))}
    </>
  )
}
/**
 * `<LineChart>`
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
  const theme = useTheme()
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: theme.metrics.screenWidth,
    height,
  })

  const handleChartLayout = (event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout)
  }

  return (
    <Container {...rest} p="sm" onLayout={handleChartLayout}>
      {title && (
        <Title
          variant="section"
          mb="xs"
          accessibilityLabel="LineChartTitle"
          textAlign="center"
        >
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
              type={ChartType.Line}
              activeColor={activeGridColor}
              activeIndex={activeGridIndex}
              belowChart
            />

            <CircleRenderer
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
            />
          </LineChartView>

          <XAxis
            layoutWidth={layout.width}
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
