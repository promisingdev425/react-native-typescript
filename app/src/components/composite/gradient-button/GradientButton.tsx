import React, { useState, useCallback } from 'react'
import noop from 'lodash/noop'
import {
  ITitle,
  IText,
  Title as TitleComp,
  Text as TextComp,
} from '~/components/core'
import { withTestProps } from '~/utils'

import { Container, InnerBase, GradientBack } from './styles'

export interface IGradientButton {
  active?: boolean
  title: string
  description: string
  onPress?: () => void
}

// Wrapped 2 components to add `testID` prop
const Title = withTestProps<ITitle>(TitleComp)
const Text = withTestProps<IText>(TextComp)

/**
 * `<GradientButton>`
 *
 * @param {object} props
 * @param {boolean} props.active - Button's state.
 * @return {React.ReactNode}
 */
const GradientButton: React.FC<IGradientButton> = ({
  active = false,
  title,
  description,
  onPress = noop,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = useCallback(() => {
    setIsPressed(true)
  }, [setIsPressed])

  const handlePressOut = useCallback(() => {
    setIsPressed(false)
  }, [setIsPressed])

  return (
    <Container
      active={active}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <InnerBase isPressed={isPressed} active={active}>
        {active && <GradientBack />}

        <Title
          testID={`ButtonTitle${active ? 1 : 0}`}
          variant="header"
          color={active ? 'white' : 'textSecondary'}
        >
          {title}
        </Title>

        <Text
          testID={`ButtonDescription${active ? 1 : 0}`}
          fontSize={2}
          color={active ? 'white' : 'textSecondary'}
        >
          {description}
        </Text>
      </InnerBase>
    </Container>
  )
}

export { GradientButton }
