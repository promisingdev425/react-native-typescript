import React, { useState } from 'react'
import { StarIcon } from '~/assets/images'

import { Box, Text } from '../../core'
import {
  Touchable,
  Container,
  Label,
  TopRank,
  TopRankLabel,
  RankLabel,
} from './styles'

type ILeaderboardCategory = {
  name: string
  awarded: number
  possible: number
  score?: number
}

export type ILeaderboardItemData = {
  name: string
  accessibilityLabel?: string
  categories: Array<ILeaderboardCategory>
  rank: number
}

export interface ILeaderboardItem {
  id: string
  name: string
  rank: number
  score: number
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

  const renderDot = () => {
    let color = 'negative'

    if (score >= 90) color = 'positive'
    else if (score >= 80) color = 'warning'

    return (
      <Box
        ml="xxs"
        width={6}
        height={6}
        borderRadius={3}
        backgroundColor={color}
      />
    )
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

        <Text fontSize={scoreFontSize} color="textGray">
          {score}
        </Text>

        {renderDot()}
      </Container>
    </Touchable>
  )
}
