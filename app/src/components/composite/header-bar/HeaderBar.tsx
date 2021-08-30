import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import { userPlaceholder } from '~/assets/images'

import { Container, Title } from './styles'

export interface IHeaderBar {
  title: string
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
  image = userPlaceholder,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title variant="header">{title}</Title>
      <Image source={image} />
    </Container>
  )
}

export { HeaderBar }
