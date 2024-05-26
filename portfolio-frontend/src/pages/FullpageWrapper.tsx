import React from 'react'

interface FullpageWrapperProps {
    children?: React.ReactNode
}

const FullPageWrapper: React.FC<FullpageWrapperProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="flex flex-col max-w-3xl w-full p-4 glass overflow-none">
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