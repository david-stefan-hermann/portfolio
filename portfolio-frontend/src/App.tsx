import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollContainer from './pages/ScrollContainer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <ScrollContainer>
              <p>Home</p>
              <p>About</p>
            </ScrollContainer>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
