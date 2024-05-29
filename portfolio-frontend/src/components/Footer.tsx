import React from 'react'
import { AppBar, Box, Container, Typography, useTheme } from '@mui/material'

const Footer: React.FC = () => {
    const theme = useTheme()

    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-around"
            textAlign="center"
            bgcolor="primary.main"
            p={theme.spacing(2)}
            color="white"
        >
            <Box>
                <Typography variant="h6" gutterBottom>
                    Impressum
                </Typography>
                <Box
                    textAlign="left"
                >
                    <Typography variant="body1" paragraph>
                        Wohne in Deutschland
                    </Typography>
                    <Typography variant="body1" paragraph>
                        in Berlini
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" gutterBottom>
                    Weiterführende Links
                </Typography>
                <Box
                    textAlign="left"
                >
                    <Typography variant="body1" paragraph>
                        Github
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" gutterBottom>
                    Rechtliches
                </Typography>
                <Box
                    textAlign="left"
                >
                    <Typography variant="body1" paragraph>
                        Willi nichti ins Gefängnisi :(
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer