import styled from 'styled-components/native'

import { Box } from '../../../core'

export type Benchmark = {
  minPositive: number
  minWarning: number
  minNegative: number
}

interface DotProps {
  dotSize: number
  score: number
  benchmark?: Benchmark
}

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Dot = styled(Box).attrs(
  ({ dotSize, score, benchmark }: DotProps) => {
    let color = 'textGray'
    if (benchmark) {
      color =
        score >= benchmark.minPositive
          ? 'positive'
          : score >= benchmark.minWarning
          ? 'warning'
          : score >= benchmark.minNegative
          ? 'negative'
          : 'textGray'
    }

    return {
      ml: 'xxs',
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
      backgroundColor: color,
    }
  },
)<DotProps>``
