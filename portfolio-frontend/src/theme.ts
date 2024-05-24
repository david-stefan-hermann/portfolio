import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
    interface Palette {
      background1?: Palette['primary']
      background2?: Palette['primary']
    }
    interface PaletteOptions {
      background1?: PaletteOptions['primary']
      background2?: PaletteOptions['primary']
    }
  }

const { palette } = createTheme()

const theme = createTheme({
    palette: {
        background1: palette.augmentColor({
            color: {
                main: '#ADD8E6'
            }
        }),
        background2: palette.augmentColor({
            color: {
                main: '#BFEFFF'
            }
        }),
    },
})


export default theme