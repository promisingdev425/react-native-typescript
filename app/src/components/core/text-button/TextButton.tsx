import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'

import { Container, StyledText } from './styles'

export interface ITextButton extends TouchableWithoutFeedbackProps {
  /**
   * Click handler.
   */
  onPress: () => void

  /**
   * Children text.
   */
  children: string
}

/**
 * `<TextButton>` is a simple button component with text.
 */
export const TextButton: React.FC<ITextButton> = ({
  onPress,
  children,
  ...rest
}) => {
  return (
    <Container onPress={onPress} accessibilityRole="button" {...rest}>
      <StyledText>{children}</StyledText>
    </Container>
  )
}
