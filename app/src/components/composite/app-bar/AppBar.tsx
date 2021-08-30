import React from 'react'

import { Container, Title } from './styles'

export interface IAppBar {
  title: string
  leftItem?: React.ReactElement
  rightItem?: React.ReactElement
}

/**
 * `<AppBar>`
 *
 * @param {object} props
 * @param {string} props.leftItem - Left widget(button/icon/etc) component to render
 * @param {string} props.rightItem - Right widget(button/icon/etc) component to render
 * @return {React.ReactNode}
 */
const AppBar: React.FC<IAppBar> = ({ title, leftItem, rightItem, ...rest }) => (
  <Container {...rest}>
    {leftItem}
    <Title variant="navigation">Bellaire Ranch</Title>
    {rightItem}
  </Container>
)

export { AppBar }
