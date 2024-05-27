import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import PortfolioCard from '../components/PortfolioCard'
import { Grid } from '@material-ui/core'
import axios from 'axios'


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
            const response = await axios.get('http://localhost:3000/api/projects')
            setProjects(response.data)
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
