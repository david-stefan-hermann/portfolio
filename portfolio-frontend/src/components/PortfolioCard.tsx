import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, Grid, Link } from '@mui/material'
import ImageCarousel from './carousel/ImageCarousel'
import { ApiData } from '../hooks/useGetProjects'

const PortfolioCard: React.FC<{ index: number, data: ApiData }> = ({ index, data }) => {
  //const imageLeft = index % 2 === 0 // Determine position of the image
  const imageLeft = false

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, width: '100%', overflow: 'hidden' }}>
      <Grid container spacing={2}>
        {imageLeft && data.images && data.images[0] && (
          <Grid item xs={12} sm={3}>
            <ImageCarousel images={data.images} />
          </Grid>
        )}
        <Grid item xs={12} sm={9} sx={{ justifyContent: "right" }}>
          <CardContent>
            <Typography variant="h6" component="div" color="text.primary">
              {data.title || "Untitled"}
            </Typography>
            {data.date && data.date && (
              <Typography gutterBottom variant="body2" color="text.primary" fontWeight="bold">
                Duration: {data.date} - {data.date}
              </Typography>
            )}
            {data.description && (
              <Typography gutterBottom variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            )}
            {data.link && (
              <Link
                href={data.link.startsWith('http://') || data.link.startsWith('https://') ? data.link : `http://${data.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Webseite besuchen
              </Link>
            )}
          </CardContent>
        </Grid>
        {!imageLeft && data.images && data.images[0] && (
          <Grid item xs={12} sm={3}>
            <ImageCarousel images={data.images} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default PortfolioCard
