import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import { getColor } from '~/theme'
import { Box } from '~/components'
import { logoImage } from '~/assets/images'

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: [
    '#FFF', '#000'
    // getColor('brandOrange')(props),
    // getColor('brandPink')(props),
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.Image.attrs(() => ({
  source: logoImage,
}))``
