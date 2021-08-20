import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { Title, Text } from '~/components/core'

import { Container, InnerBase, Background } from './styles'

/**
 * `<GradientButton>`
 *
 * @param {object} props
 * @param {boolean} props.active - Button's state.
 * @return {React.ReactNode}
 */
const GradientButton = ({ active, title, description, onPress, ...rest }) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = useCallback(() => {
    setIsPressed(true)
  }, [setIsPressed])

  const handlePressOut = useCallback(() => {
    setIsPressed(false)
  }, [setIsPressed])

  const handlePress = useCallback(() => {
    if (onPress) onPress()
  }, [onPress])

  return (
    <Container
      active={active}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      {...rest}
    >
      <InnerBase isPressed={isPressed} active={active}>
        {active && <Background active={active} isPressed={isPressed} />}

        <Title variant="header" color={active ? 'white' : 'textSecondary'}>
          {title}
        </Title>

        <Text fontSize={2} color={active ? 'white' : 'textSecondary'}>
          {description}
        </Text>
      </InnerBase>
    </Container>
  )
}

GradientButton.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

GradientButton.defaultProps = {
  active: false,
  onPress: noop,
}

export { GradientButton }
