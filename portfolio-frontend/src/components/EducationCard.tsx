import React from 'react'
import { ApiBlogData } from '../hooks/useGetEducation'
import ImageCarousel from './carousel/ImageCarousel'
import { Box, Button, CardContent, Grid, Link, Paper, Typography } from '@mui/material'

const EducationCard: React.FC<{ index: number, data: ApiBlogData }> = ({ index, data }) => {
  //const imageLeft = index % 2 === 0 // Determine position of the image
  const imageLeft = true

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 2,
        width: '100%',
        overflow: 'hidden'
      }}>
      <Grid container spacing={2}>
        {imageLeft && data.images && data.images[0] && (
          <Grid item xs={12} sm={3}>
            <ImageCarousel images={data.images} />
          </Grid>
        )}
        <Grid item xs={12} sm={9} sx={{ justifyContent: "right" }}>
          <CardContent>
            <Typography variant="h5" component="div" color="text.primary">
              {data.title || "Untitled"}
            </Typography>
            {data.start_date && data.end_date && (
              <Typography gutterBottom variant="body2" color="text.primary" fontWeight="bold">
                Duration: {data.start_date} - {data.end_date}
              </Typography>
            )}
            {data.location && (
              <Typography variant="body2" color="text.secondary">
                Location: {data.location}
              </Typography>
            )}
            {data.study && (
              <Typography gutterBottom variant="body2" color="text.secondary">
                Study Field: {data.study}
              </Typography>
            )}
            {data.link && (
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 1 }}
                onClick={() => {
                  data.link && (
                    window.open(data.link.startsWith('http://') || data.link.startsWith('https://') ? data.link : `http://${data.link}`)
                    , '_blank')
                }}
              >
                <Typography variant="body2">
                  Webseite besuchen
                </Typography>
              </Button>
            )}
          </CardContent>
        </Grid>
        {!imageLeft && data.images && data.images[0] && (
          <Grid item xs={12} sm={3}>
            <ImageCarousel images={data.images} />
          </Grid>
        )}
      </Grid>
    </Paper>
  )
}

export default EducationCard
