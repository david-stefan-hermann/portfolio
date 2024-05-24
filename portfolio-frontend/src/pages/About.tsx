import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      bgcolor="grey.100"
      id="about"
    >
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5">
          Hi, I'm [Your Name], a [Your Profession] based in [Your Location].
        </Typography>
      </Box>
    </Box>
  )
}

export default About
