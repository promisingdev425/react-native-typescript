import { Text as TextRN } from 'react-native'
import styled from 'styled-components/native'
import { space, color, backgroundColor, typography, layout, flexbox, position } from 'styled-system'
import PropTypes from 'prop-types'

import { fontFamilyComposite, lineHeightComposite } from '~/theme'

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
