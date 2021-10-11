import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'

import { Container, StyledText } from './styles'

export interface IIconButton extends TouchableWithoutFeedbackProps {
  /**
   * Click handler.
   */
  onPress: () => void

  /**
   * The icon object.
   */
  icon: React.ReactNode

  /**
   * Display some text below the icon.
   */
  text?: React.ReactNode
}

/**
 * `<IconButton>` is a simple button component that accepts an Icon and some text.
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const IconButton: React.FC<IIconButton> = ({
  onPress,
  icon,
  text=null,
  ...rest
}) => (
  <Container onPress={onPress} accessibilityRole="button" accessibilityLabel={text ? text : 'Icon Button'} {...rest}>
    {icon}
    {text && <StyledText>{text}</StyledText>}
  </Container>
)
