import React from 'react'
import Container from '@mui/material/Container'
import BlogList from '../components/BlogList'

const Blog: React.FC = () => {
  // You can replace this with actual data fetching logic
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
