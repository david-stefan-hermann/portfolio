import React from 'react'
import Container from '@mui/material/Container'
import PortfolioCard from '../components/PortfolioCard'
import { Grid } from '@mui/material'
import useGetProjects from '../hooks/useGetProjects'


const PortfolioPage: React.FC = () => {
  const projects = useGetProjects()

  return (
    <Container>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <PortfolioCard key={index} data={project} />
        ))}
      </Grid>
    </Container>
  )
}

export default PortfolioPage
