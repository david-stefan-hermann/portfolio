import React, { useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import useGetSettings from '../hooks/useGetSettings'

const Home: React.FC = () => {
  const theme = useTheme()
  const settings = useGetSettings()
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = document.getElementById('header')
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }
  }, [])

  return (
    <>
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height='50vh'
          width='100%'
          marginBottom={theme.spacing(4)}
          sx={{
            backgroundImage: `url(${settings?.images?.[0] || 'https://via.placeholder.com/1920x1080'})`,
            backgroundSize: "contain",
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
            borderTop: "solid transparent",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: theme.spacing(1),
              padding: theme.spacing(2),
              marginBottom: `-${theme.spacing(4)}`,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "3.5rem",
                  md: "4rem",
                },
              }}
            >
              {settings?.hero_title || 'John Doe'}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                },
              }}
            >
              {settings?.hero_subtitle || 'Systemadministrator'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home