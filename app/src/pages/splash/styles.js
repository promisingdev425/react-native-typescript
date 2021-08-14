import styled from 'styled-components/native'

import { Box } from '~/components'
import { logoImage } from '~/assets/images'

export const Container = styled(Box).attrs(() => ({
  bg: 'brandOrange'
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.Image.attrs(() => ({
  source: logoImage,
}))``
