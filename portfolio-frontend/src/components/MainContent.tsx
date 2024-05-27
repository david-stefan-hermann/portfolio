import React from 'react'


interface MainContentProps {
    children: React.ReactNode | null
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className='flex flex-col items-center w-full bg-red-200'>
            <div className='flex flex-col w-full md:max-w-5xl pt-14 min-h-screen bg-green-500 justify-center'>
                <div className='flex flex-col w-full bg-blue-500'>
                    <div className='py-3'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent