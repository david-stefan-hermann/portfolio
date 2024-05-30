import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import TopNavbar from './components/TopNavbar'
import EducationList from './pages/EducationList'
import ExperienceList from './pages/ExperienceList'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer'
import { Container } from '@mui/material'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

let theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4dc4ff',
    },
    secondary: {
      main: '#ff5500',
    },
  },
}))

theme = createTheme(theme, {
  palette: {
    mode: 'light',
    primary: theme.palette.augmentColor({
      color: {
        main: '#4dc4ff',
      },
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: '#ff884d',
      }
    }),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <Container
              maxWidth="md"
            >
              <Home />
              <ExperienceList />
              <PortfolioPage />
              <EducationList />
            </Container>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
