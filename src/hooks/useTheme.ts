/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable import/order */
import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'contexts/ThemeContext'
import { ThemeContext } from 'contexts/ThemeContext'

const useTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeContext)
  return { isDark, toggleTheme, theme }
}

export default useTheme
