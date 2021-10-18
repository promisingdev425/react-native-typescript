import styled from 'styled-components/native'

import { Box, Text, Dot } from '../../core'

import { getColor, getFontSize } from '~/theme'

export const ValueDotContainer = styled(Box)`
  flex-direction: row;
`

export const Value = styled(Text).attrs((props) => {
  return {
    fontSize: getFontSize('value')(props),
    mb: 'xxs',
  }
})``

export const TheDot = styled(Dot).attrs({
  mt: 'xxs',
  ml: 'xs',
})``

export const Title = styled(Text).attrs((props) => {
  return {
    fontSize: getFontSize('body2')(props),
    color: getColor('textGray')(props),
  }
})``
