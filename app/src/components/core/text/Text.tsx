import React from 'react'
import { Text as TextRN, TextProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import {
  space,
  color as colorStyle,
  typography,
  layout,
  flexbox,
  position,
  lineHeight,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  LineHeightProps,
} from 'styled-system'

import PickingService from '~/services/picking'
import { fontFamilyComposite, lineHeightComposite } from '~/theme'

export interface IText
  extends TextProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    LineHeightProps {
  allowFontScaling?: boolean
  bg?: string
  color?: string
  fontFamilyGroup?: string
  fontFamilyStyle?: string
  fontSize?: string | number
  noselect?: boolean
}

const StyledText = styled(TextRN)<IText>`
  ${(props) => {
    if (props.noselect) {
      return PickingService.forPlatform({
        web: css`
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        `,
      })
    }

    return null
  }}

  ${space}
  ${colorStyle}
  ${typography}
  ${layout}
  ${lineHeight}
  ${flexbox}
  ${position}
  ${fontFamilyComposite}
  ${lineHeightComposite}
`

/**
 * `<Text>` is the generic component you can use to
 * display text using any styles from our theme.
 */
const Text: React.FC<IText> = ({
  allowFontScaling = false,
  bg = 'clear',
  color = 'textPrimary',
  fontFamilyGroup = 'group.sfProDisplay',
  fontFamilyStyle = 'style.regular',
  fontSize = 'body1',
  noselect = false,
  ...rest
}) => (
  <StyledText
    allowFontScaling={allowFontScaling}
    bg={bg}
    color={color}
    fontFamilyGroup={fontFamilyGroup}
    fontFamilyStyle={fontFamilyStyle}
    fontSize={fontSize}
    noselect={noselect}
    {...rest}
  />
)

export { Text }
