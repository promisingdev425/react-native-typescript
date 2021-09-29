import { themeGet } from '@styled-system/theme-get'
import { mapToTheme as theme } from 'styled-map'

import get from 'lodash/get'
import isNumber from 'lodash/isNumber'

/* istanbul ignore next */
const px = (n: number) => {
  return isNumber(n) && n !== 0 ? `${n}px` : n
}

/**
 * Retrieve a value in pixels from the given scale array
 * by it's name or index.
 * @see https://styled-system.com/responsive-styles#responsive-styles
 *
 * @param n - The index or name of the item in the scale param
 *   that you wish to retrieve.
 * @param scale - An array of possible values from which
 *   you wish to get a value.
 */
export const getPx = (n: any, scale: number[]) => {
  return px(get(scale, n))
}

export const mapProps = (mapper: any) => {
  return (func: any) => {
    return (props: any) => {
      return func(mapper(props))
    }
  }
}

/* istanbul ignore next */
export const mapToTheme = (key: string, prop = 'variant') => {
  return (props?: string) => {
    return theme(key, prop)(props)(props)(props)
  }
}

/**
 * Get a function that will return a color from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the color in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getColor = (key: string) => {
  return themeGet(`colors.${key}`)
}

/**
 * Get a function that will return a "metric" from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the metric in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getMetrics = (key: string) => {
  return themeGet(`metrics.${key}`)
}

/* istanbul ignore next */
/**
 * Get a function that will return a "space" from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the space/size in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getSpace = (key: string) => {
  return themeGet(`space.${key}`)
}

/* istanbul ignore next */
/**
 * Get a function that will return a radius from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the radius in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getRadii = (key: string) => {
  return themeGet(`radii.${key}`)
}

/**
 * Get a function that will return a font from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the font in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getTypography = (key: string) => {
  return themeGet(`typography.${key}`)
}

/* istanbul ignore next */
/**
 * Get a function that will return a font size from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the font size in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getFontSize = (key: string) => {
  return themeGet(`fontSizes.${key}`)
}

/* istanbul ignore next */
/**
 * Get a function that will return a line height from the theme
 * when you pass it the props of your component.
 * @see https://styled-system.com/how-it-works#how-it-works
 * @see https://www.npmjs.com/package/@styled-system/theme-get
 *
 * @param key - The name of the line height in the theme.
 * @return {function} A function that you can use
 * in a `styled-components` declaration.
 */
export const getLineHeight = (key: string) => {
  return themeGet(`lineHeights.${key}`)
}
