import { Text as TextRN } from 'react-native'
import styled from 'styled-components/native'
import {
  space,
  color,
  backgroundColor,
  typography,
  layout,
  flexbox,
  position,
} from 'styled-system'
import PropTypes from 'prop-types'

import { fontFamilyComposite, lineHeightComposite } from '~/theme'

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
const Text = styled.Text`
  ${space}
  ${backgroundColor}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${position}
  ${fontFamilyComposite}
  ${lineHeightComposite}
`

Text.propTypes = {
  ...TextRN.propTypes,
  allowFontScaling: PropTypes.bool,
  bg: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamilyGroup: PropTypes.string,
  fontFamilyStyle: PropTypes.string,
}

Text.defaultProps = {
  ...TextRN.defaultProps,
  allowFontScaling: false,
  bg: 'clear',
  color: 'textPrimary',
  fontSize: 2,
  fontFamilyGroup: 'group.sfProDisplay',
  fontFamilyStyle: 'style.regular',
}

export { Text }
