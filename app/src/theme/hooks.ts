import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

/* istanbul ignore next */
export const useTheme = () => {
  return useContext(ThemeContext)
}
