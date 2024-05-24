import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import FullPageWrapper from './FullpageWrapper'
import useTheme from '@mui/material/styles/useTheme'


interface ScrollContainerProps {
    children?: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()

    const colors = [
        theme.palette.background5?.main,
        theme.palette.background6?.main,
        theme.palette.background7?.main,
        theme.palette.background8?.main,
        theme.palette.background9?.main,
        theme.palette.background10?.main,
        theme.palette.background1?.main,
        theme.palette.background2?.main,
        theme.palette.background3?.main,
        theme.palette.background4?.main,
    ] // Define the background colors for each section

    // get visible FullPageWrapper based on scroll position
    const [visibleIndex, setVisibleIndex] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const index = Math.round(containerRef.current.scrollTop / containerRef.current.clientHeight)
                setVisibleIndex(index)
            }
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    return (
        <Box
            ref={containerRef}
            sx={{
                overflowY: 'auto',
                height: '100vh',
                scrollSnapType: 'y mandatory',
                transition: 'background-color 1s ease',
                backgroundColor: colors[visibleIndex],
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
