import React from 'react'
import Container from '@mui/material/Container'
import Portfolio from '../components/Portfolio'

const PortfolioPage: React.FC = () => {
  // You can replace this with actual data fetching logic
  const items = [
    { title: 'Project One', description: 'This is the first project.', image: 'https://via.placeholder.com/600x400' },
    { title: 'Project Two', description: 'This is the second project.', image: 'https://via.placeholder.com/600x400' },
    { title: 'Project Three', description: 'This is the third project.', image: 'https://via.placeholder.com/600x400' }
  ]

  return (
    <Container>
      <Portfolio items={items} />
    </Container>
  )
}

export default PortfolioPage
