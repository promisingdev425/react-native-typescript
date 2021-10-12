import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedbackProps } from 'react-native'

import { Container, StyledText } from './styles'

export interface IIconButton extends TouchableWithoutFeedbackProps {
  /**
   * Click handler.
   */
  onPress: () => void

  /**
   * The icon object.
   */
  icon: React.ReactNode

  /**
   * Display some text below the icon.
   */
  text?: React.ReactNode
}

/**
 * `<IconButton>` is a simple button component that accepts an Icon and some text.
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const IconButton: React.FC<IIconButton> = ({
  onPress,
  icon,
  text=null,
  ...rest
}) => (
  <Container onPress={onPress} accessibilityRole="button" {...rest}>
    {icon}
    {text && <StyledText>{text}</StyledText>}
  </Container>
)

IconButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string,
  customProp: function(props, propName, componentName) {
    if (!('text' in props) && !('accessibilityLabel' in props)) {
      return new Error('If you are not providing any text, please add an accessibilityLabel.');
    }
  },
}
