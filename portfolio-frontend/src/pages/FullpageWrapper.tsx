import React from 'react'


interface FullpageWrapperProps {
    children?: React.ReactNode
}
const FullPageWrapper: React.FC<FullpageWrapperProps> = ({ children }) => {

    return (
        <div className="section h-screen flex items-center justify-center bg-gray-100">
            {React.Children && React.Children.map(children, (child, index) => (
                <div key={index} className="scroll-section">
                    {child}
                </div>
            ))}
        </div>
    )
}

export default FullPageWrapper
