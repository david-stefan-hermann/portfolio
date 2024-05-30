import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { Box, Typography } from '@mui/material'
import useGetProjects from '../hooks/useGetProjects'
import useGetHeaderHeight from '../hooks/useGetHeaderHeight'


const PortfolioPage: React.FC = () => {
  const projects = useGetProjects()
  const headerHeight = useGetHeaderHeight()

  return (
    <>
      <Box
        id="erfahrung"
        sx={{
          height: `${headerHeight}px`,
          marginTop: `-${headerHeight}px`
        }}></Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" align="center" pt={4}>
            Portfolio - Projekte
          </Typography>
        </Box>
        {projects && projects.map((project, idx) => (
          <PortfolioCard key={idx} index={idx} data={project} />
        ))}
      </Box>
    </>
  )
}

export default PortfolioPage
