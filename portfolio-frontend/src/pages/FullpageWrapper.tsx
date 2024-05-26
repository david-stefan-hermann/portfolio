import React from 'react'

interface FullpageWrapperProps {
    children?: React.ReactNode
}

const FullPageWrapper: React.FC<FullpageWrapperProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="max-w-3xl w-full p-4 glass flex items-center h-screen justify-center">
                {React.Children && React.Children.map(children, (child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FullPageWrapper