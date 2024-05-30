import React from 'react'
import { ApiBlogData } from '../hooks/useGetExperience'
import { Box, CardContent, Grid, Link, Typography } from '@mui/material'
import ImageCarousel from './carousel/ImageCarousel'

const ExperienceCard: React.FC<{ index: number, data: ApiBlogData }> = ({ index, data }) => {
  //const imageLeft = index % 2 === 0 // Determine position of the image
  const imageLeft = true

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
            <Typography variant="h5" component="div" color="text.primary">
              {data.job_title || "Untitled"}
            </Typography>
            <Typography variant="h6" component="div" color="text.primary">
              {data.title || "Untitled"}
              {data.location && `, ${data.location}`}
            </Typography>
            {data.start_date && data.end_date && (
              <Typography gutterBottom variant="body2" color="text.primary" fontWeight="bold">
                Duration: {data.start_date} - {data.end_date}
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

export default ExperienceCard
