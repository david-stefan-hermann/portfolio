import React from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'


interface ProjectData {
  title?: string
  description?: string
  motivation?: string
  link?: string
  images?: string[]
}

const Project: React.FC<{data: ProjectData}> = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {data?.title}
        </Typography>
        <Typography color="textSecondary">
          {data?.description}
        </Typography>
        <Typography variant="h6" component="h3">
          Motivation
        </Typography>
        <Typography color="textSecondary">
          {data?.motivation}
        </Typography>
        {
            data?.link && (
                <Button color="primary" href={data?.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                </Button>
            )
        }
        <SwipeableViews enableMouseEvents>
          {data?.images?.map((image, idx) => (
            <img key={idx} src={image} alt={`Image ${data?.title}-${idx}`} style={{ width: '100%', height: 'auto' }} />
          ))}
        </SwipeableViews>
      </CardContent>
    </Card>
  )
}

export default Project