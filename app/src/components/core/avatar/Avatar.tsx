import React from 'react'
import styled from 'styled-components/native'
import { Image, ImageSourcePropType } from 'react-native'

import { Box, IBox } from '../box'
import { Text } from '../text'

export interface IAvatar extends IBox {
  /**
   * The name of the user. This will be used
   * to generate their initials should the
   * profile image not exist.
   */
  name: string
  /**
   * The size variations of the component.
   * If you pass a number, it will be used as
   * a pixel dimension.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | number
  /**
   * The URL of the user's profile image. You
   * can pass either this prop or the `source`
   * prop.
   */
  image?: string
  /**
   * The source prop for the underlying `Image`
   * component. Using this prop allows you to
   * access additional functionality of the image
   * such as passing multiple image dimensions or
   * controlling caching.
   * @see https://docs.expo.dev/versions/latest/react-native/image/#source
   */
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

/**
 * The `Avatar` component can be used to show a user's
 * profile image or their initials if they don't have a profile
 * image. For the profile image, you can either pass a
 * URL to the `image` prop or you can pass the `source`
 * prop which will be passed directly to the underlying
 * `react-native` `Image` component.
 */
export const Avatar: React.FC<IAvatar> = ({
  name,
  size,
  image,
  source,
  // TODO Figure out how to document this. `extends IBox` didn't
  // do the trick.
  /**
   * Any other props you pass will be passed along
   * to the wrapping `Box` element.
   */
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
      <AvatarImage
        accessibilityLabel={`${getPlaceholder()} profile picture`}
        source={getSource()}
        size={getSize()}
      />
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
