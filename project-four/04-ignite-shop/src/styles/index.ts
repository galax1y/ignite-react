import { createStitches } from '@stitches/react'

// configurando o Stitches + temas globais
// const config = createStitches({})
export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6',
    },
  },
})
