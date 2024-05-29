import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home' // replace with your actual component paths
import Portfolio from './pages/Portfolio'
import Blog from './pages/EducationList'
import TopNavbar from './components/TopNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'

/* Roboto Font for Material UI */
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import MainContent from './components/MainContent'
import EducationList from './pages/EducationList'
import ExperienceList from './pages/ExperienceList'


function App() {

  return (
    <>
      <Router>
        <TopNavbar />
        <MainContent>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/bildung" element={<EducationList />} />
            <Route path="/erfahrung" element={<ExperienceList />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Link to="/" />} />
          </Routes>
        </MainContent>
      </Router>
    </>
  )
}

export default App
