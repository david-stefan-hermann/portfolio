import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import useGetExperience from '../hooks/useGetExperience'
import { Box, Typography } from '@mui/material'
import useGetHeaderHeight from '../hooks/useGetHeaderHeight'

const ExperienceList: React.FC<{}> = () => {
  const posts = useGetExperience()
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
            Arbeitserfahrung
          </Typography>
        </Box>
        {posts && posts.map((post, idx) => (
          <ExperienceCard key={idx} index={idx} data={post} />
        ))}
      </Box>
    </>
  )
}

export default ExperienceList