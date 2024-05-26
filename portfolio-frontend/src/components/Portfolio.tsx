// src/components/Portfolio.tsx
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

interface PortfolioItem {
  title: string
  description: string
  image: string
}

interface PortfolioProps {
  items: PortfolioItem[]
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio
