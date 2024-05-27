import React from 'react'
import Container from '@mui/material/Container'
import useGetEducation from '../hooks/useGetEducation'
import { Grid } from '@material-ui/core'
import BlogCard from '../components/BlogCard'


const Blog: React.FC = () => {

  // const posts = useGetEducation()

  const posts = [
    { id: '1', title: 'First Post', description: 'This is the first post.', image: 'https://via.placeholder.com/600x400' },
    { id: '2', title: 'Second Post', description: 'This is the second post.', image: 'https://via.placeholder.com/600x400' },
    { id: '3', title: 'Third Post', description: 'This is the third post.', image: 'https://via.placeholder.com/600x400' }
  ]

  return (
    <Container>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogCard id={post.id} title={post.title} description={post.description} image={post.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Blog
