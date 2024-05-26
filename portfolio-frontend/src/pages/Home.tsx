import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio Blog
      </Typography>
      <Typography variant="body1" component="p">
        This is a sample portfolio blog built with React and Material-UI.
      </Typography>
    </Container>
  )
}

export default Home
