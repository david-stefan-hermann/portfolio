import React from 'react'
import { Box, useTheme } from '@mui/material'


interface FullpageWrapperProps {
    children?: React.ReactNode
    key?: number
}
const FullPageWrapper: React.FC<FullpageWrapperProps> = ({ children, key }) => {

    const theme = useTheme()

    return (
        <Box
            sx={{
                height: '100vh',
                scrollSnapAlign: 'start',
                backgroundColor: theme.palette.background1?.main,
            }}
            
            bgcolor={theme.palette.background.default}

        >
            {React.Children && React.Children.map(children, (child, index) => (
                <div key={index} >
                    {child}
                </div>
            ))}
        </Box>
    )
}

export default FullPageWrapper
