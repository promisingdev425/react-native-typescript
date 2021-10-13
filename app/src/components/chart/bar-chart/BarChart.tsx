import React, { useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle } from 'react-native'
import { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

import { useTheme } from '~/theme'

import { Box, Title } from '../../core'
import { IChart, IDecorator, ChartType } from '../types'
import { XAxis, YAxis, getGridMin } from '../helpers'

import { Container, Body, ChartView, Grid } from './styles'

/**
 * `<BarChart>`
 */
export const BarChart: React.FC<IChart> = ({
  title,
  values,
  inset = 5,
  height = 300,
  numberOfTicks = 10,
  gridColor = 'lightGray',
  activeGridIndex,
  fillColor,
  ...rest
}) => {
  const chartData = values.map((item) => item.value)
  const theme = useTheme()
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const handleChartLayout = (event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout)
  }

  /* istanbul ignore next */
  const GradientFill = () => (
    <Defs key={'default'}>
      <LinearGradient id="default" x1="0" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={theme.colors.brandOrange} />
        <Stop offset="100%" stopColor={theme.colors.brandPink} />
      </LinearGradient>
    </Defs>
  )

  /* istanbul ignore next */
  const BarRenderer = ({ data, x, y }: IDecorator) => {
    const layoutWidth = layout.width
    const { sm } = theme.space
    const elementWidth = (layoutWidth - sm * 2 - 30) / data.length
    const barWidth = Math.min(elementWidth * 0.6, 30)
    const xSpace = (elementWidth - barWidth) / 2

    return (
      <>
        {data.map((value, index) => {
          const baseY = y(0)
          const barHeight = baseY - y(value)
          return (
            <Rect
              key={index}
              x={x(index) + xSpace - elementWidth / 2}
              y={barHeight > 0 ? baseY - barHeight : baseY}
              rx={5}
              width={elementWidth - xSpace * 2}
              height={Math.abs(barHeight)}
              fill={value >= 0 ? 'url(#default)' : theme.colors.lightGray}
            />
          )
        })}
      </>
    )
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
        <YAxis data={chartData} min={getGridMin(chartData)} inset={inset} />

        <Box flex={1}>
          <ChartView
            data={chartData}
            inset={inset}
            svg={{ strokeWidth: 1, stroke: '#333' }}
            gridMin={getGridMin(chartData)}
          >
            <Grid
              strokeColor={gridColor}
              type={ChartType.Line}
              direction="BOTH"
              belowChart
            />

            <GradientFill />
            <BarRenderer />
          </ChartView>

          <XAxis
            data={chartData}
            inset={inset}
            formatLabel={(value, index) => values[index].label}
          />
        </Box>
      </Body>
    </Container>
  )
}
