import React from 'react'
import { ImageSourcePropType } from 'react-native'

import { userPlaceholder } from '~/assets/images'

import { IAvatar } from '../../core'

import { Container, Title, Avatar } from './styles'

export interface IHeaderBar {
  title: string
  avatar?: IAvatar
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
  avatar,
  image = userPlaceholder,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title variant="header">{title}</Title>

      <Avatar {...avatar} />
    </Container>
  )
}

export { HeaderBar }
