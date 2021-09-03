import React from 'react'

import { Container, Title } from './styles'

export interface IAppBar {
  /**
   * The title text displayed in the center of the AppBar.
   */
  title: string
  /**
   * A React Element to place on the left side of the AppBar.
   */
  leftItem?: React.ReactNode
  /**
   * A React Element to place on the right side of the AppBar.
   */
  rightItem?: React.ReactNode
}

/**
 * `<AppBar>` component displays a title with optional React
 * elements to the left and right of the title.
 */
export const AppBar: React.FC<IAppBar> = ({ title, leftItem, rightItem, ...rest }) => (
  <Container {...rest}>
    {leftItem}
    <Title variant="navigation">{title}</Title>
    {rightItem}
  </Container>
)

