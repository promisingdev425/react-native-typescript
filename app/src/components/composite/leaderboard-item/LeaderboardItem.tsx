import React, { useState } from 'react'
import { ArrowIcon } from '~/assets/images'

import { IBox } from '../../core'
import { Touchable, Container, Label, BorderLine } from './styles'

export type ILeaderboardItemData = {
  value: string
  label: string
  Icon: React.FC
  accessibilityLabel?: string
}

export interface ILeaderboardItem extends IBox {
  isLast?: boolean
  option: ILeaderboardItemData
  height: number
  onPress: (data: ILeaderboardItemData) => void
}

/**
 * `<LeaderboardItem>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const LeaderboardItem: React.FC<ILeaderboardItem> = ({
  option,
  height,
  onPress,
  isLast = false,
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const { Icon } = option

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const handlePress = () => {
    onPress(option)
  }

  return (
    <Touchable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      accessibilityLabel={option.accessibilityLabel}
    >
      <Container isPressed={isPressed} height={height}>
        <Icon />

        <Label>{option.label}</Label>

        <ArrowIcon />

        {!isLast && <BorderLine />}
      </Container>
    </Touchable>
  )
}
