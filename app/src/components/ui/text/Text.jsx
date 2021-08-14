import { Text as TextRN } from 'react-native'
import styled from 'styled-components/native'
import { space, color, typography, layout, flexbox, position } from 'styled-system'
import PT from 'prop-types'

// import { fontFamilyComposite, lineHeightComposite } from '~/theme'

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${position}
`

Text.propTypes = {
  ...TextRN.propTypes,
  allowFontScaling: PT.bool,
  bg: PT.string,
  color: PT.string,
  fontSize: PT.number,
  // fontFamilyGroup: PT.string,
  // fontFamilyStyle: PT.string,
}

Text.defaultProps = {
  ...TextRN.defaultProps,
  allowFontScaling: false,
  bg: 'clear',
  color: 'textPrimary',
  fontSize: 3,
  // fontFamilyGroup: 'group.sfProDisplay',
  // fontFamilyStyle: 'style.regular',
}

export { Text }
