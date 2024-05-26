// src/components/BlogPost.tsx
import React from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  
  // You can replace this with actual data fetching logic
  const post = {
    title: "Sample Blog Post",
    content: "This is a sample blog post content.",
    image: "https://via.placeholder.com/600x400"
  }

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <img src={post.image} alt={post.title} style={{ width: '100%', marginBottom: '20px' }} />
      <Typography variant="body1" component="div">
        {post.content}
      </Typography>
    </Container>
  )
}

export default BlogPost
