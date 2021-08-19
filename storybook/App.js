import React from 'react'
import StorybookUI from './index.js'
import useFonts from '~/assets/fonts/useFonts'

export default function App() {
  const fontsLoaded = useFonts()

  return fontsLoaded ? <StorybookUI /> : null
}
