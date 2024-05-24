// src/components/ScrollContainer.tsx
import React from 'react'
import useScrollBackground from '../hooks/useScrollBackground'
import FullPageWrapper from './FullpageWrapper'


interface ScrollContainerProps {
    children?: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {

    useScrollBackground()

    return (
        <div className="scroll-container flex flex-col">
            {React.Children && React.Children.map(children, (child, index) => (
                <FullPageWrapper key={index}>
                    {child}
                </FullPageWrapper>
            ))}
        </div>
    )
}

export default ScrollContainer
