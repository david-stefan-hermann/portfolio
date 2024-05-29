import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import useGetEducation from '../hooks/useGetEducation'
import { Box, Typography } from '@mui/material'

const ExperienceList: React.FC<{}> = () => {
  const posts = useGetEducation()

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" align="center" pt={4}>
        Arbeitserfahrung
        </Typography>
      </Box>
      {posts && posts.map((post) => (
        <ExperienceCard data={post} />
      ))}
    </Box>
  )
}

export default ExperienceList