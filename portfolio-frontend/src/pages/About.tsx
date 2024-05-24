import React from 'react'

const About: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100" id="about">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">About Me</h1>
                <p className="text-xl">Hi, I'm [Your Name], a [Your Profession] based in [Your Location].</p>
            </div>
        </div>
    )
}

export default About
