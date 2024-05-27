// src/components/Portfolio.tsx
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import SlideShow from './SlideShow'


interface ProjectData {
  title?: string
  description?: string
  motivation?: string
  link?: string
  images?: string[]
}

const PortfolioCard: React.FC<{ data: ProjectData }> = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        {data?.images && (
          <SlideShow images={data?.images} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PortfolioCard