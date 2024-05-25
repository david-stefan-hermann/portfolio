import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollContainer from './pages/ScrollContainer'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <ScrollContainer>
              <About />
              <Education />
              <Projects />
              <Contact />
              <p>About</p>
              <p>Hallo</p>
              <p>Welt</p>
              <p>Kannst du mich hören?</p>
            </ScrollContainer>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
