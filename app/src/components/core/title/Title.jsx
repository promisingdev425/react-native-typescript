import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../text'

/**
 * `<Title>`
 *
 * @param {object} props
 * @param {string} props.variant - Font size, family and styles can be changed by variant.
 * @return {React.ReactNode}
 */
const Title = ({ variant, ...rest }) => {
  let size = 4, style = 'style.bold', family = 'group.sfProDisplay'

  switch (variant) {
    case 'navigation':
      size = 4
      break
    case 'header':
      size = 7
      break
    case 'section':
      size = 5
      break
    case 'body':
    default:
      style = 'style.regular'
      break
  }

  return (
    <Text
      fontSize={size}
      fontFamilyGroup={family}
      fontFamilyStyle={style}
      {...rest}
    />
  )
}

Title.propTypes = {
  variant: PropTypes.oneOf(['navigation', 'header', 'section', 'body']),
}

Title.defaultProps = {
  variant: 'body',
}

export { Title }
