import React from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'

import { Container } from './styles'

export interface IIconButton extends TouchableWithoutFeedbackProps {
  onPress: () => void
  children?: React.ReactNode
  style?: object
  testID?: string
}

/**
 * `<IconButton>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const IconButton: React.FC<IIconButton> = ({
  onPress,
  children,
  ...rest
}) => (
  <Container onPress={onPress} accessibilityRole="button" {...rest}>
    {children}
  </Container>
)
