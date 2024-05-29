import React from 'react'
import EducationCard from '../components/EducationCard'
import useGetEducation from '../hooks/useGetEducation'
import { Box, Typography } from '@mui/material'

const EducationList: React.FC<{}> = () => {
  const posts = useGetEducation()

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" align="center" pt={4}>
          Bildungsweg
        </Typography>
      </Box>
      {posts && posts.map((post) => (
        <EducationCard data={post} />
      ))}
    </Box>
  )
}

export default EducationList