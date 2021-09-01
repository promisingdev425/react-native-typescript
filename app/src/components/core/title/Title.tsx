import React from 'react'

import { Text, IText } from '../text'

export interface ITitle extends IText {
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
  let size = 'h3'
  let style = 'style.bold'
  const family = 'group.sfProDisplay'

  switch (variant) {
    case 'header':
      size = 'h1'
      break
    case 'section':
      size = 'h2'
      break
    case 'navigation':
      size = 'h3'
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
