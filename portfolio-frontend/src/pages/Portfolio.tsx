import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import PortfolioCard from '../components/PortfolioCard'
import { Grid } from '@material-ui/core'


interface ProjectData {
  title?: string
  description?: string
  motivation?: string
  link?: string
  images?: string[]
}

const PortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects') // replace with your API endpoint
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [])

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
