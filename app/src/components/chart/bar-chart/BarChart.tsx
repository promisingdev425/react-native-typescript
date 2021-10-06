import React from 'react'
import { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

import { themes } from '~/theme'

import { Box, Title } from '../../core'
import { IChart, IDecorator, ChartType } from '../types'
import { XAxis, YAxis, getGridMin } from '../helpers'

import { Container, Body, ChartView, Grid } from './styles'

/**
 * `<BarChart>`
 *
 * @param {object} props
 * @return {React.ReactNode}
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

  /* istanbul ignore next */
  const GradientFill = () => (
    <Defs key={'default'}>
      <LinearGradient id="default" x1="0" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={themes.light.colors.brandOrange} />
        <Stop offset="100%" stopColor={themes.light.colors.brandPink} />
      </LinearGradient>
    </Defs>
  )

  /* istanbul ignore next */
  const BarDecorator = ({ data, x, y }: IDecorator) => {
    const { screenWidth } = themes.light.metrics
    const { sm } = themes.light.space
    const elementWidth = (screenWidth - sm * 2 - 30) / data.length
    const xSpace = elementWidth * 0.15

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
              fill={
                value >= 0 ? 'url(#default)' : themes.light.colors.lightGray
              }
            />
          )
        })}
      </>
    )
  }

  return (
    <Container {...rest} p="sm">
      {title && (
        <Title variant="section" mb="xs">
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
            <BarDecorator />
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
