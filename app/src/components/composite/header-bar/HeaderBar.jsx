import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import { userPlaceholder } from '~/assets/images'

import { Container, Title } from './styles'

/**
 * `<HeaderBar>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
const HeaderBar = ({ title, image, ...rest }) => {
  return (
    <Container {...rest}>
      <Title variant="header">{title}</Title>
      <Image source={image} />
    </Container>
  )
}

HeaderBar.propTypes = {
  title: PropTypes.string,
  image: Image.propTypes.source,
}

HeaderBar.defaultProps = {
  title: '',
  image: userPlaceholder,
}

export { HeaderBar }
