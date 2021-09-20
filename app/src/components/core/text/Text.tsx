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

/**
 * `<Title>`
 *
 * @param {object} props
 * @param {string} props.allowFontScaling - Allow font sizes inside app should be scaled by system settings.
 * @param {string} props.bg - Background color from `theme/${current theme}/colors`
 * @param {string} props.color - Text color from `theme/${current theme}/colors`
 * @param {string} props.fontSize - Index value of font sizes from `theme/${current theme}/index.ts`
 * @param {string} props.fontFamilyGroup - Font family name
 * @param {string} props.fontFamilyStyle - Font family style (regular | bold | semiBold | ... )
 * @return {React.ReactNode}
 */
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
