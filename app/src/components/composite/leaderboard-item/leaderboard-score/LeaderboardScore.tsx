import React from 'react'

import { IBox, Text } from '../../../core'

import { Benchmark, Container, Dot } from './styles'

export interface ILeaderboardScore extends IBox {
  fontSize: string
  dotSize: number
  score: number
  benchmark?: Benchmark
}

/**
 * `<LeaderboardScore>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const LeaderboardScore: React.FC<ILeaderboardScore> = ({
  fontSize,
  dotSize,
  score,
  benchmark,
  ...rest
}) => (
  <Container {...rest}>
    <Text fontSize={fontSize}>{score}</Text>

    <Dot dotSize={dotSize} score={score} benchmark={benchmark} />
  </Container>
)
