import styled from 'styled-components/native'

import { getMetrics, getLineHeight, getSpace } from '~/theme'

import { Box, Title as TitleCore } from '../../core'

export const Container = styled(Box).attrs((props) => ({
  bg: 'white',
  px: 5,
  height: getMetrics('appBarHeight')(props),
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(TitleCore)`
  position: absolute;
  left: ${(props) => getSpace('10')(props)}px;
  right: ${(props) => getSpace('10')(props)}px;
  text-align: center;
  line-height: ${(props) => getLineHeight('2')(props)}px;
`
