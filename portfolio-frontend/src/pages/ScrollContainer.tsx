import React, { useRef, useState } from 'react'
import FullPageWrapper from './FullpageWrapper'
import colors from '../colors'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

// Define the props for the ScrollContainer component
interface ScrollContainerProps {
    children?: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    // Create a ref for the container element
    const containerRef = useRef<HTMLDivElement>(null)

    // State to keep track of the currently visible FullPageWrapper
    const [visibleIndex, setVisibleIndex] = useState(0)

    // Use the custom hook to observe the container element
    useIntersectionObserver(setVisibleIndex, containerRef)

    // Function to get the background color based on the index
    const getColor = (index: number) => {
        // Wrap the index to ensure it stays within the range of available colors
        const wrappedIndex = (index + 4) % colors.background.length
        // Return the corresponding color from the colors array
        return colors.background[wrappedIndex]
    }

    return (
        <div
            ref={containerRef}
            className="transition-colors duration-1000 font-roboto"
            style={{
                backgroundColor: getColor(visibleIndex)
            }}
        >
            {React.Children.map(children, (child, index) => (
                <FullPageWrapper key={index}>
                    {child}
                </FullPageWrapper>
            ))}
        </div>
    )
}

export default ScrollContainer