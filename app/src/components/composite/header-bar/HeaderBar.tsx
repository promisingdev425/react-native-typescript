import React from 'react'
import { ImageSourcePropType } from 'react-native'

import { userPlaceholder } from '~/assets/images'

import { Container, Title, Avatar } from './styles'

export interface IHeaderBar {
  title: string
  size?: string
  image?: ImageSourcePropType
}

/**
 * `<HeaderBar>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
const HeaderBar: React.FC<IHeaderBar> = ({
  title,
  size = 'sm',
  image = userPlaceholder,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title variant="header">{title}</Title>

      <Avatar source={image} size={size} />
    </Container>
  )
}

export { HeaderBar }
