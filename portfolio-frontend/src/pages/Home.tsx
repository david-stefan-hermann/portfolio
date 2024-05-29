import React, { useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

const Home: React.FC = () => {
  const theme = useTheme()
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = document.getElementById('header')
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }
  }, [])

  return (
    <Box
      id="hero"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height='100vh'
      marginTop={`-${headerHeight}px`}
      textAlign="center"
    >
      <Typography variant="h1">
        David Hermann
      </Typography>
      <Typography variant="h4">
        Software Developer und Systemadministrator
      </Typography>
    </Box>
  )
}

export default Home