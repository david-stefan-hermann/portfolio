import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import FullPageWrapper from './FullpageWrapper'


interface ScrollContainerProps {
    children?: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <Box
            ref={containerRef}
            sx={{
                overflowY: 'auto',
                height: '100vh',
                scrollSnapType: 'y mandatory',
            }}
        >
            {React.Children.map(children, (child, index) => (
                <FullPageWrapper key={index} >
                    {child}
                </FullPageWrapper>
            ))}
        </Box>
    )
}

export default ScrollContainer
