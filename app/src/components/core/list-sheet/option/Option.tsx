import React, { useState } from 'react'
import { ArrowIcon } from '~/assets/images'

import { IBox } from '../../box'
import { Touchable, Container, Label, BorderLine } from './styles'

export type IOptionData = {
  value: string
  label: string
  Icon: React.FC
  accessibilityLabel?: string
}

export interface IOption extends IBox {
  isLast?: boolean
  option: IOptionData
  height: number
  onPress: (data: IOptionData) => void
}

/**
 * `<Option>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const Option: React.FC<IOption> = ({
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
