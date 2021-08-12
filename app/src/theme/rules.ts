import { system, fontFamily } from 'styled-system'

import join from 'lodash/join'

import { getTypography, mapProps, getPx } from './helpers'

export const lineHeight = system({
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
    transform: getPx,
  },
})

export const fontFamilyComposite = mapProps((props) => {
  const fGroup = getTypography(props.fontFamilyGroup)(props)
  const fStyle = getTypography(props.fontFamilyStyle)(props)
  const fSeparator = getTypography(`separator.${fGroup}`)(props)

  if (!fGroup || !fStyle) {
    return props
  }

  return {
    fontFamily: join([fGroup, fStyle], fSeparator),
    ...props,
  }
})(fontFamily)

export const lineHeightComposite = mapProps((props) => {
  return {
    lineHeight: props.lineHeight || props.fontSize,
    ...props,
  }
})(lineHeight)
