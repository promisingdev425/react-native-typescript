import React, { useCallback } from 'react'
import throttle from 'lodash/throttle'

import { ButtonContainer, ButtonBack, Title } from './styles'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePress = useCallback(
    throttle(() => {
      onPress(data)
    }, 500),
    [],
  )

  return (
    <ButtonContainer
      {...rest}
      onPress={handlePress}
      testID={`ToggleButton-${data.id}`}
    >
      <ButtonBack {...rest}>
        <Title {...rest}>{data.label}</Title>
      </ButtonBack>
    </ButtonContainer>
  )
}
