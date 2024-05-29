import Home from './pages/Home' // replace with your actual component paths
import Portfolio from './pages/Portfolio'
import TopNavbar from './components/TopNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'

import EducationList from './pages/EducationList'
import ExperienceList from './pages/ExperienceList'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer'
import { Container } from '@mui/material'


const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3be1c0',
    },
    secondary: {
      main: '#3b5ce1',
    },
  },
}))


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavbar />
      <Container maxWidth="lg">
        <Home />
        <ExperienceList />
        <Portfolio />
        <EducationList />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
