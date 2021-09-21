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
  isLast?: boolean
  data: ILeaderboardItemData
  disabled?: boolean
  onPress: (data: ILeaderboardItemData) => void
}

/**
 * `<LeaderboardItem>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const LeaderboardItem: React.FC<ILeaderboardItem> = ({
  data,
  onPress,
  isLast = false,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const labelFontSize = data.rank <= 3 ? 'subtitle2' : 'h3'
  const scoreFontSize = data.rank <= 3 ? 'body1' : 'h3'

  const score = () => {
    const { categories } = data
    const [totalAwarded, totalPossible] = categories.reduce(
      (acc, cur) => {
        return [acc[0] + cur.awarded, acc[1] + cur.possible]
      },
      [0, 0],
    )

    return (totalAwarded / totalPossible) * 100
  }

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const handlePress = () => {
    onPress(data)
  }

  const renderLeftIcon = () => {
    const { rank } = data
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
    const percentage = score()
    let color = 'negative'

    if (percentage >= 90) color = 'positive'
    else if (percentage >= 80) color = 'warning'

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
      accessibilityLabel={data.accessibilityLabel}
      {...rest}
    >
      <Container isPressed={isPressed}>
        {renderLeftIcon()}

        <Label fontSize={labelFontSize}>{data.name}</Label>

        <Text fontSize={scoreFontSize} color="textGray">
          {score()}
        </Text>

        {renderDot()}
      </Container>
    </Touchable>
  )
}
