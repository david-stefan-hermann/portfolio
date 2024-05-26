import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollContainer from './pages/ScrollContainer'
import About from './pages/About'
import ProjectList from './pages/ProjectList'

/* Roboto Font for Material UI */
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'


function App() {

  return (
    <>
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projekte" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
          </ThemeProvider>
    </>
  )
}

export default App
