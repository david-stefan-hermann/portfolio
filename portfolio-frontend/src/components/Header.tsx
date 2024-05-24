import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 fixed w-full top-0 shadow-md z-10">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="text-white">About</a></li>
                    <li><a href="#projects" className="text-white">Projects</a></li>
                    <li><a href="#contact" className="text-white">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
