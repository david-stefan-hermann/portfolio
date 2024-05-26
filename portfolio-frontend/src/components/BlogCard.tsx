// src/components/BlogCard.tsx
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { Link } from 'react-router-dom'

interface BlogCardProps {
  id: string
  title: string
  description: string
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/blog/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard
