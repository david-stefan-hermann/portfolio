import React from 'react'
import EducationCard from '../components/EducationCard'
import useGetEducation from '../hooks/useGetEducation'
import { Box, Typography } from '@mui/material'
import useGetHeaderHeight from '../hooks/useGetHeaderHeight'

const EducationList: React.FC<{}> = () => {
  const posts = useGetEducation()
  const headerHeight = useGetHeaderHeight()

  return (
    <>
      <Box
        id="bildung"
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
            Bildungsweg
          </Typography>
        </Box>
        {posts && posts.map((post, idx) => (
          <EducationCard key={idx} index={idx} data={post} />
        ))}
      </Box>
    </>
  )
}

export default EducationList