import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import SchoolIcon from '@mui/icons-material/School'
import GitHubIcon from '@mui/icons-material/GitHub'


const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio Blog
        </Typography>
        <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>Über Mich</Button>
        <Button color="inherit" component={Link} to="/portfolio" startIcon={<CodeIcon />}>Portfolio</Button>
        <Button color="inherit" component={Link} to="/bildung" startIcon={<SchoolIcon />}>Bildung</Button>
        <Button color="inherit" href="https://github.com/david-stefan-hermann" target='blank' startIcon={<GitHubIcon />}>GitHub</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar