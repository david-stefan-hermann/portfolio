import React, { useEffect, useRef, useState } from 'react'
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
    // Create a ref for the Intersection Observer
    const observer = useRef<IntersectionObserver | null>(null)

    // State to keep track of the currently visible FullPageWrapper
    const [visibleIndex, setVisibleIndex] = useState(0)

    useIntersectionObserver(setVisibleIndex, containerRef);

    /*
    useEffect(() => {
        // Calculate the height of the viewport
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        // Calculate the root margin for the Intersection Observer
        const rootMargin = `-${viewportHeight / 2 - 1}px 0px -${viewportHeight / 2 - 1}px 0px`

        // Initialize the Intersection Observer
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // If the entry is intersecting, update the visibleIndex state
                if (entry.isIntersecting) {
                    const index = Array.from(containerRef.current?.children || []).indexOf(entry.target as HTMLElement)
                    setVisibleIndex(index)
                }
            })
        }, {
            root: null,
            rootMargin,
        })

        // Start observing each child of the container
        const container = containerRef.current
        if (container) {
            Array.from(container.children).forEach((child) => {
                observer.current?.observe(child)
            })
        }
        // Clean up function to stop observing all children
        return () => {
            if (observer.current) {
                Array.from(container?.children || []).forEach((child) => {
                    observer.current?.unobserve(child)
                })
            }
        }
    }, [])
*/
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