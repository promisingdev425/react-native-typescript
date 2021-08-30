import React from 'react'

import { Text, IText } from '../text'

interface ITitle extends IText {
  variant?: 'navigation' | 'header' | 'section' | 'body'
}

/**
 * `<Title>`
 *
 * @param {object} props
 * @param {string} props.variant - Font size, family and styles can be changed by variant.
 * @return {React.ReactNode}
 */
const Title: React.FC<ITitle> = ({ variant = 'body', ...rest }) => {
  let size = 4
  let style = 'style.bold'
  const family = 'group.sfProDisplay'

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

export { Title }
