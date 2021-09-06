import React, { useState } from 'react'
import map from 'lodash/map'

import { Container } from './styles'
import { IToggleOption, ToggleButton } from './ToggleButton'

export interface IToggleGroup {
  testID: string
  height?: number
  options: IToggleOption[]
  onChange: (option: IToggleOption) => void
}

/**
 * `<ToggleGroup>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const ToggleGroup: React.FC<IToggleGroup> = ({
  height = 32,
  options,
  onChange,
  ...rest
}) => {
  const [activeValue, setActiveValue] = useState(options[0].value)

  const handlePress = (option: IToggleOption) => {
    setActiveValue(option.value)
    onChange(option)
  }

  return (
    <Container height={height} {...rest}>
      {map(options, (option: IToggleOption) => (
        <ToggleButton
          key={option.id}
          data={option}
          onPress={handlePress}
          active={option.value === activeValue}
          height={height}
          {...rest}
        />
      ))}
    </Container>
  )
}
