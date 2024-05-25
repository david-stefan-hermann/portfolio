import React, { useEffect, useRef, useState } from 'react'
import FullPageWrapper from './FullpageWrapper'
import colors from '../colors'


interface ScrollContainerProps {
    children?: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null)

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

    const getColor = (index: number) => {
        const wrappedIndex = index + 4 % colors.background.length
        return colors.background[wrappedIndex]
    }

    return (
        <div
            ref={containerRef}
            className="
            h-screen 
            snap-mandatory snap-y overflow-y-scroll 
            transition-colors duration-1000 font-roboto}
            "
            style={{
                backgroundColor: getColor(visibleIndex)
            }}
        >
            {React.Children.map(children, (child, index) => (
                <FullPageWrapper key={index} >
                    {child}
                </FullPageWrapper>
            ))}
        </div>
    )
}

export default ScrollContainer