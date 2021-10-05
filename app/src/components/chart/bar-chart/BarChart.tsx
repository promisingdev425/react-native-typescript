import React from 'react'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

import { themes } from '~/theme'

import { Box, Title } from '../../core'
import { IChart, ChartType } from '../types'
import { XAxis, YAxis } from '../helpers'

import { Container, Body, BarChartView, Grid } from './styles'

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
  activeGridColor = 'brandPink',
  ...rest
}) => {
  const chartData = values.map((item) => item.value)

  const GradientFill = () => (
    <Defs key={'default'}>
      <LinearGradient id="default" x1="0" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={themes.light.colors.brandOrange} />
        <Stop offset="100%" stopColor={themes.light.colors.brandPink} />
      </LinearGradient>
    </Defs>
  )

  return (
    <Container {...rest} p="sm">
      {title && (
        <Title variant="section" mb="xs">
          {title}
        </Title>
      )}

      <Body height={height}>
        <YAxis data={chartData} inset={inset} />

        <Box flex={1}>
          <BarChartView
            data={chartData}
            spacingInner={0.1}
            inset={inset}
            svg={{ fill: fillColor || 'url(#default)' }}
          >
            <Grid strokeColor={gridColor} type={ChartType.Bar} belowChart />
            <GradientFill />
          </BarChartView>

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
