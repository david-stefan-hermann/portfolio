import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollContainer from './pages/ScrollContainer'
import About from './pages/About'
import ProjectList from './pages/ProjectList'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Project from './components/Project'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <ScrollContainer>
              <About />
              <Education />
              <ProjectList>
                <Project subfolderPath="1" />
                <Project subfolderPath="2" />
                <Project subfolderPath="3" />
                <Project subfolderPath="4" />
              </ProjectList>
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
