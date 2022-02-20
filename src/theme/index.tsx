import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme } from './templates'

interface ThemeProvicerProps {
  children: ReactNode
}

function ThemeProvider (props: ThemeProvicerProps) {
  return (
    <StyledThemeProvider theme={theme}>
      {props.children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider