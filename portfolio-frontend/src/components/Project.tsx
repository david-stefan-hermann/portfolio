// src/components/Project.tsx
import React, { useState, useEffect } from 'react'

interface Content {
    title: string
    description: string
    link: string
}

interface ProjectProps {
    subfolderPath: string
}

interface ImageFile {
    default: string
}

const contentModules = import.meta.glob('../assets/projects/*/content.ts')
const imageModules = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,svg}')

const Project: React.FC<ProjectProps> = ({ subfolderPath }) => {
    const [content, setContent] = useState<Content | null>(null)
    const [imageFiles, setImageFiles] = useState<string[]>([])

    useEffect(() => {
        // Dynamically import the content file
        const loadContent = async () => {
            try {
                const contentKey = `../assets/projects/${subfolderPath}/content.ts`
                if (contentModules[contentKey]) {
                    const module = await contentModules[contentKey]()
                    setContent(module as Content)
                } else {
                    console.error("Content module not found")
                }
            } catch (error) {
                console.error("Error loading content:", error)
            }
        }

        loadContent()

        // Dynamically load images
        const loadImages = async () => {
            try {
                const imagePaths: string[] = []
                const imageKeyPrefix = `../assets/projects/${subfolderPath}/`

                for (const key in imageModules) {
                    if (key.startsWith(imageKeyPrefix)) {
                        const imageModule = await imageModules[key]() as ImageFile
                        imagePaths.push(imageModule.default)
                    }
                }

                setImageFiles(imagePaths)
            } catch (error) {
                console.error("Error loading images:", error)
            }
        }

        loadImages()
    }, [subfolderPath])

    if (!content) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <a href={content.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            <div>
                {imageFiles.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Project
