import React from 'react'
import styled from 'styled-components/native'
import { Image, ImageSourcePropType } from 'react-native'

import { Box } from '../box'
import { Text } from '../text'

export interface IAvatar {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | number
  image?: string
  source?: ImageSourcePropType
  testID?: string
}

interface IAvatarSize {
  size: number
}

const AvatarImage = styled(Image)`
  border-radius: ${(props: IAvatarSize) => props.size / 2}px;
  width: 100%;
  height: 100%;
`

const Container = styled(Box)`
  overflow: hidden;
  width: ${(props: IAvatarSize) => props.size}px;
  height: ${(props: IAvatarSize) => props.size}px;
  border-radius: ${(props: IAvatarSize) => props.size / 2}px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Avatar: React.FC<IAvatar> = ({
  name,
  size,
  image,
  source,
  ...rest
}) => {
  const getSize = () => {
    let sizePx: number = typeof size === 'number' ? size : 32

    switch (size) {
      case 'xs':
        sizePx = 24
        break
      case 'sm':
        sizePx = 32
        break
      case 'md':
        sizePx = 48
        break
      case 'lg':
        sizePx = 64
        break
    }

    return sizePx
  }

  const getFontSize = () => {
    return getSize() / 2
  }

  const getPlaceholder = () => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
  }

  const getSource = () => {
    return source || { uri: image }
  }

  const avatarEl =
    source || image ? (
      <AvatarImage source={getSource()} size={getSize()} />
    ) : (
      <Text fontSize={getFontSize()} fontFamilyStyle="style.bold">
        {getPlaceholder()}
      </Text>
    )

  return (
    <Container size={getSize()} {...rest}>
      {avatarEl}
    </Container>
  )
}
