import React from 'react'
import { Text as TextRN } from 'react-native'
import styled from 'styled-components/native'
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

import { fontFamilyComposite, lineHeightComposite } from '~/theme'

export interface IText
  extends SpaceProps,
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
  fontSize?: number
}

/**
 * `<Title>`
 *
 * @param {object} props
 * @param {string} props.allowFontScaling - Allow font sizes inside app should be scaled by system settings.
 * @param {string} props.bg - Background color from `theme/${current theme}/colors`
 * @param {string} props.color - Text color from `theme/${current theme}/colors`
 * @param {number} props.fontSize - Index value of font sizes from `theme/${current theme}/index.ts`
 * @param {string} props.fontFamilyGroup - Font family name
 * @param {string} props.fontFamilyStyle - Font family style (regular | bold | semiBold | ... )
 * @return {React.ReactNode}
 */
const StyledText = styled(TextRN)<IText>`
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

const Text: React.FC<IText> = ({
  allowFontScaling = false,
  bg = 'clear',
  color = 'textPrimary',
  fontFamilyGroup = 'group.sfProDisplay',
  fontFamilyStyle = 'style.regular',
  fontSize = 2,
  ...rest
}) => (
  <StyledText
    allowFontScaling={allowFontScaling}
    bg={bg}
    color={color}
    fontFamilyGroup={fontFamilyGroup}
    fontFamilyStyle={fontFamilyStyle}
    fontSize={fontSize}
    {...rest}
  />
)

export { Text }
