import React from 'react'
import Container from '@mui/material/Container'
import BlogList from '../components/BlogList'
import useGetEducation from '../hooks/useGetEducation'


const Blog: React.FC = () => {
  
  // const posts = useGetEducation()
  
  const posts = [
    { id: '1', title: 'First Post', description: 'This is the first post.', image: 'https://via.placeholder.com/600x400' },
    { id: '2', title: 'Second Post', description: 'This is the second post.', image: 'https://via.placeholder.com/600x400' },
    { id: '3', title: 'Third Post', description: 'This is the third post.', image: 'https://via.placeholder.com/600x400' }
  ]

  return (
    <Container>
      <BlogList posts={posts} />
    </Container>
  )
}

export default Blog
