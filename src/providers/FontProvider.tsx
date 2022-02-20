import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { memo, ReactNode } from 'react'
import AppLoading from 'expo-app-loading'

import { theme } from 'src/theme/templates/index'

interface FontProviderProps {
  children: ReactNode
}

function BaseFontProvider ({ children }: FontProviderProps) {
  const mapFont = {
    [theme.fonts.mediumn]: Poppins_500Medium,
    [theme.fonts.bold]: Poppins_700Bold,
    [theme.fonts.regular]: Poppins_400Regular,
  }

  const [isFontsLoaded] = useFonts(mapFont)
  
  if (!isFontsLoaded) return <AppLoading />

  return (
    <>
      {children}
    </>
  )
}

export const FontProvider = memo(BaseFontProvider)