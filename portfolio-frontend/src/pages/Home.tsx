import React from 'react'
import { Box, Link, Typography, alpha, useTheme } from '@mui/material'
import useGetSettings from '../hooks/useGetSettings'
import useGetHeaderHeight from '../hooks/useGetHeaderHeight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { keyframes } from '@mui/system'
import useGetScrollDistance from '../hooks/useGetScrollDistance'

const Home: React.FC = () => {
  const theme = useTheme()
  const settings = useGetSettings()
  const headerHeight = useGetHeaderHeight()
  const scrollPosition = useGetScrollDistance()

  const bounce = keyframes`
  0%, 20%, 40%, 100% {
    transform: translateY(0);
  }
  10%, 30% {
    transform: translateY(${headerHeight / 2}px);
  }`

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
              backgroundColor: alpha(theme.palette.background.default, 0.3),
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
      <Box
        sx={{
          height: headerHeight * 2,
          marginTop: `-${headerHeight * 2}px`,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            bottom: 0,
            opacity: `${scrollPosition > 50 ? '0' : '1'}`,
            visibility: `${scrollPosition > 50 ? 'hidden' : 'visible'}`,
            transition: 'all 1.5s ease',
          }}
        >
          <Link
            href="#erfahrung"
          >
            <ExpandMoreIcon
              sx={{
                color: 'primary.light',
                fontWeight: 'semibold',
                fontSize: { xs: '5rem', md: '6rem' },
                animation: `${bounce} 3s infinite`,
              }}
            />
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default Home