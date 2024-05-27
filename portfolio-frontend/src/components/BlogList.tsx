import React from 'react'
import Grid from '@mui/material/Grid'
import BlogCard from './BlogCard'

interface BlogListProps {
  posts: {
    id: string
    title: string
    description: string
    image: string
  }[]
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <BlogCard id={post.id} title={post.title} description={post.description} image={post.image} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogList
