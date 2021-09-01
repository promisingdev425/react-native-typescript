import styled from 'styled-components/native'

import { getMetrics } from '~/theme'

import { Box, Title as TitleCore } from '../../core'

export const Container = styled(Box).attrs((props) => ({
  bg: 'white',
  px: 'sm',
  height: getMetrics('appBarHeight')(props),
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(TitleCore)`
  position: absolute;
  left: 56px;
  right: 56px;
  text-align: center;
`
