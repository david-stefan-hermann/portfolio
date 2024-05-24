// src/hooks/useScrollBackground.tsx
import { useEffect } from 'react'

const useScrollBackground = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>('.section')
            const scrollPosition = window.scrollY + window.innerHeight / 2

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight

                if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.body.style.backgroundColor = section.dataset.bgcolor || '#fff'
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
}

export default useScrollBackground
