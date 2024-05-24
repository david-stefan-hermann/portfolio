import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
    interface Palette {
        background1?: Palette['primary']
        background2?: Palette['primary']
        background3?: Palette['primary']
        background4?: Palette['primary']
        background5?: Palette['primary']
        background6?: Palette['primary']
        background7?: Palette['primary']
        background8?: Palette['primary']
        background9?: Palette['primary']
        background10?: Palette['primary']
    }
    interface PaletteOptions {
        background1?: PaletteOptions['primary']
        background2?: PaletteOptions['primary']
        background3?: PaletteOptions['primary']
        background4?: PaletteOptions['primary']
        background5?: PaletteOptions['primary']
        background6?: PaletteOptions['primary']
        background7?: PaletteOptions['primary']
        background8?: PaletteOptions['primary']
        background9?: PaletteOptions['primary']
        background10?: PaletteOptions['primary']
    }
}

const { palette } = createTheme()

const theme = createTheme({
    palette: {
        background1: palette.augmentColor({
            color: {
                main: '#fbf8cc'
            }
        }),
        background2: palette.augmentColor({
            color: {
                main: '#fde4cf'
            }
        }),
        background3: palette.augmentColor({
            color: {
                main: '#ffcfd2'
            }
        }),
        background4: palette.augmentColor({
            color: {
                main: '#f1c0e8'
            }
        }),
        background5: palette.augmentColor({
            color: {
                main: '#cfbaf0'
            }
        }),
        background6: palette.augmentColor({
            color: {
                main: '#a3c4f3'
            }
        }),
        background7: palette.augmentColor({
            color: {
                main: '#90dbf4'
            }
        }),
        background8: palette.augmentColor({
            color: {
                main: '#8eecf5'
            }
        }),
        background9: palette.augmentColor({
            color: {
                main: '#98f5e1'
            }
        }),
        background10: palette.augmentColor({
            color: {
                main: '#b9fbc0'
            }
        }),
    },
})


export default theme