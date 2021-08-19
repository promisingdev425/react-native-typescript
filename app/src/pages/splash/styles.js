import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { getColor } from '~/theme'
import { logoImage } from '~/assets/images'

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: [getColor('brandOrange')(props), getColor('brandPink')(props)],
  start: [0.2, 0.2],
  end: [0.8, 0.8],
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.Image.attrs(() => ({
  source: logoImage,
}))``
