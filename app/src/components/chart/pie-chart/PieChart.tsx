import React from 'react'
import { PieChart as PieChartView } from 'react-native-svg-charts'
import range from 'lodash/range'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { IChart, ChartData } from '../types'
import { Title, Text } from '../../core'

import { MetaView } from './MetaView'
import { Container, Overview, ChartView, ChartInfo, Meta } from './styles'

/**
 * `<PieChart>`
 */
export const PieChart: React.FC<IChart> = ({
  title,
  height = 250,
  values,
  ...rest
}) => {
  const max = reduce(values, (acc, value) => acc + value.value, 0)
  const pieData = map(values, (value: ChartData) => ({
    ...value,
    svg: { fill: value.color },
  }))
  const numRows = Math.ceil(values.length / 3.0)

  return (
    <Container>
      <ChartView>
        <PieChartView
          style={{ width: Number(height), height: Number(height) }}
          data={pieData}
          innerRadius={height * 0.3}
          padAngle={0}
        />

        <Overview>
          <Title variant="header" accessibilityLabel="PieChartTotalValue">
            {max}
          </Title>

          {title && (
            <Text
              color="textGray"
              fontSize="body2"
              accessibilityLabel="PieChartTitle"
            >
              {title.toUpperCase()}
            </Text>
          )}
        </Overview>
      </ChartView>

      {map(range(numRows), (row) => (
        <ChartInfo key={`info-row${row}`}>
          {map(range(3), (col) =>
            row * 3 + col < values.length ? (
              <Meta
                key={`info-row${row}-col${col}`}
                accessibilityLabel="PieChartFactor"
              >
                <MetaView {...values[row * 3 + col]} />
              </Meta>
            ) : (
              <Meta key={`info-row${row}-col${col}`} />
            ),
          )}
        </ChartInfo>
      ))}
    </Container>
  )
}
