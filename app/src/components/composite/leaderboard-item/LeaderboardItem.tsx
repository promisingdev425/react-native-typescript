import React, { useState } from 'react'
import { StarIcon } from '~/assets/images'

import { Box } from '../../core'
import { Benchmark, LeaderboardScore } from './leaderboard-score'
import {
  Touchable,
  Container,
  Label,
  TopRank,
  TopRankLabel,
  RankLabel,
} from './styles'

export interface ILeaderboardItem {
  id: string
  name: string
  rank: number
  score: number
  dotSize?: number
  benchmark?: Benchmark
  accessibilityLabel?: string
  isLast?: boolean
  disabled?: boolean
  onPress: (id: string) => void
}

/**
 * `<LeaderboardItem>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const LeaderboardItem: React.FC<ILeaderboardItem> = ({
  id,
  name,
  rank,
  score,
  dotSize = 6,
  benchmark,
  onPress,
  isLast = false,
  accessibilityLabel,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const labelFontSize = rank <= 3 ? 'subtitle2' : 'h3'
  const scoreFontSize = rank <= 3 ? 'body1' : 'h3'

  /* istanbul ignore next */
  const handlePressIn = () => {
    setIsPressed(true)
  }

  /* istanbul ignore next */
  const handlePressOut = () => {
    setIsPressed(false)
  }

  const handlePress = () => {
    onPress(id)
  }

  const renderLeftIcon = () => {
    let content = <RankLabel>{rank}</RankLabel>
    if (rank <= 3) {
      content = (
        <TopRank>
          <Box position="absolute">
            <StarIcon />
          </Box>

          <TopRankLabel>{rank}</TopRankLabel>
        </TopRank>
      )
    }

    return content
  }

  return (
    <Touchable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      accessibilityLabel={accessibilityLabel}
      {...rest}
    >
      <Container isPressed={isPressed}>
        {renderLeftIcon()}

        <Label fontSize={labelFontSize}>{name}</Label>

        <LeaderboardScore
          fontSize={scoreFontSize}
          dotSize={dotSize}
          score={score}
          benchmark={benchmark}
        />
      </Container>
    </Touchable>
  )
}
