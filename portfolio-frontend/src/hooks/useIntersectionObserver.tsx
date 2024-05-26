import { useEffect, useRef } from 'react'

function useIntersectionObserver(setVisibleIndex: React.Dispatch<React.SetStateAction<number>>, containerRef: React.RefObject<HTMLDivElement>) {
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        // Calculate the viewport height
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        // Set the root margin for the IntersectionObserver
        const rootMargin = `-${viewportHeight / 2 - 1}px 0px -${viewportHeight / 2 - 1}px 0px`

        // Create a new IntersectionObserver
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Get the index of the intersecting element
                    const index = Array.from(containerRef.current?.children || []).indexOf(entry.target as HTMLElement)
                    // Set the visible index using the provided state setter function
                    setVisibleIndex(index)
                }
            })
        }, {
            root: null, // Use the viewport as the root
            rootMargin, // Apply the root margin
        })

        const container = containerRef.current
        if (container) {
            // Observe each child element in the container
            Array.from(container.children).forEach((child) => {
                observer.current?.observe(child)
            })
        }

        // Clean up the observer when the component unmounts
        return () => {
            if (observer.current) {
                // Unobserve each child element in the container
                Array.from(container?.children || []).forEach((child) => {
                    observer.current?.unobserve(child)
                })
            }
        }
    }, [])

    return observer
}

export default useIntersectionObserver