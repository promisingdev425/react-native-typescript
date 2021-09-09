import React, { useCallback } from 'react'
import throttle from 'lodash/throttle'

import { ButtonContainer, ButtonBack, Title } from './styles'

export interface IToggleOption {
  id: string
  value: string
  label: string
  a11yLabel?: string
}

export interface IToggleButtonBase {
  active?: boolean
  height?: number
}

export interface IToggleButton extends IToggleButtonBase {
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
  active,
  height,
  ...rest
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePress = useCallback(
    throttle(() => {
      onPress(data)
    }, 500),
    [onPress],
  )

  return (
    <ButtonContainer
      testID={`ToggleButton-${data.id}`}
      onPress={handlePress}
      accessible
      accessibilityRole="button"
      accessibilityLabel={data.a11yLabel || data.value}
      {...rest}
    >
      <ButtonBack height={height} active={active}>
        <Title height={height} active={active} noselect>
          {data.label}
        </Title>
      </ButtonBack>
    </ButtonContainer>
  )
}
