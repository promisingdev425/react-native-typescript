import React from 'react'
import useFonts from '~/assets/fonts/useFonts'

const FontProvider = ({ children }) => {
  const loaded = useFonts()
  if (loaded) return children
  else return null
}

export const fonts = (story) => <FontProvider>{story()}</FontProvider>
