import 'styled-components'
import { DefaultTheme } from 'styled-components'
import * as colors from './colors'
import { fontFamilyNunitoSemiBold, fontFamilyNunitoBold, fontFamilyNunitoBlack, fontFamilyNunitoRegular, typeScale, lineHeight } from './typography'
import { shadow, borderRadius } from './visual'

declare module 'styled-components' {
    export interface DefaultTheme {
      fontFamilyNunitoSemiBold: string
      fontFamilyNunitoBold: string
      fontFamilyNunitoBlack: string
      fontFamilyNunitoRegular: string
      colors: typeof colors
      typeScale: typeof typeScale
      lineHeight: typeof lineHeight
      shadow: typeof shadow
      borderRadius: typeof borderRadius
    }
  }

  export const theme : DefaultTheme = {
    fontFamilyNunitoSemiBold,
    fontFamilyNunitoBold,
    fontFamilyNunitoBlack,
    fontFamilyNunitoRegular,
    colors,
    typeScale,
    lineHeight,
    shadow,
    borderRadius
  }



