import React from 'react'

import { Container } from './styles'

export interface IIconButton {
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
  <Container onPress={onPress} {...rest}>
    {children}
  </Container>
)
