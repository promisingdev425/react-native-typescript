import { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'

/* istanbul ignore next */
export const useTheme = () => {
  return useContext(ThemeContext)
}
