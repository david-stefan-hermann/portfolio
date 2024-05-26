import React, { useEffect, useState } from 'react'
import Project from '../components/Project'

interface ProjectListProps {
    children?: React.ReactNode
}

interface ProjectData {
    title?: string
    description?: string
    motivation?: string
    link?: string
    images?: string[]
}

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
    const [projects, setProjects] = useState<ProjectData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/projects') // replace with your API endpoint
                const data = await response.json()
                setProjects(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
                <Project key={index} data={project} /> // pass the project data as a prop to the Project component
            ))}
            {children}
        </div>
    )
}

export default ProjectList