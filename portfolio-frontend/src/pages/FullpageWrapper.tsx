import React from 'react'
import { Box } from '@mui/material'


interface FullpageWrapperProps {
    children?: React.ReactNode
}

const FullPageWrapper: React.FC<FullpageWrapperProps> = ({ children }) => {

    return (
        <Box
            className="flex flex-col justify-center items-center py-4"
            sx={{
                height: '100vh',
                scrollSnapAlign: 'start',
            }}
        >
            <Box
                className="max-w-3xl w-full h-full border-2 border-black"
            >
                {React.Children && React.Children.map(children, (child, index) => (
                    <div key={index} >
                        {child}
                    </div>
                ))}
            </Box>
        </Box>
    )
}

export default FullPageWrapper
