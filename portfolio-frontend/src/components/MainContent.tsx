import React from 'react'


interface MainContentProps {
    children: React.ReactNode | null
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col w-full md:max-w-5xl pt-14 min-h-screen justify-center'>
                <div className='flex flex-col w-full'>
                    <div className='pb-3'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent