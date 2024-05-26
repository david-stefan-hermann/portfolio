import React from 'react'

interface ProjectListProps {
    children?: React.ReactNode
}

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </div>
    )
}

export default ProjectList
