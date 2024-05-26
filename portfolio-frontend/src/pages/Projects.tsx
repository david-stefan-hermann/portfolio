import React from 'react'

const Projects: React.FC = () => {
    const projectList = [
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        },
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        },
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        },
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        },
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        },
        {
            title: "Project One",
            description: "A brief description of Project One.",
            imageUrl: "path/to/image1.jpg",
            link: "http://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of Project Two.",
            imageUrl: "path/to/image2.jpg",
            link: "http://example.com/project-two"
        }
    ]

    return (
        <div className="flex items-center justify-center bg-white" id="projects">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md">
                            <img src={project.imageUrl} alt={project.title} className="mb-4 rounded" />
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
