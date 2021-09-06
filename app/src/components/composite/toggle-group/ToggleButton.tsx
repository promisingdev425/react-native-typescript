import React from 'react'

import { ButtonContainer, Title } from './styles'

export interface IToggleOption {
  id: string
  value: string
  label: string
}

export interface IToggleButton {
  active?: boolean
  height: number
  data: IToggleOption
  onPress: (option: IToggleOption) => void
}

/**
 * `<ToggleButton>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const ToggleButton: React.FC<IToggleButton> = ({
  data,
  onPress,
  ...rest
}) => {
  const handlePress = () => {
    onPress(data)
  }

  return (
    <ButtonContainer {...rest} onPress={handlePress}>
      <Title {...rest}>{data.label}</Title>
    </ButtonContainer>
  )
}
