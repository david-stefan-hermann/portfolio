import React from 'react'
import Typography from '@mui/material/Typography'
import BaseCard from './BaseCard'
import { ApiData } from '../hooks/useGetProjects'

const PortfolioCard: React.FC<{ index: number, data: ApiData }> = ({ index, data }) => {
  //const imageLeft = index % 2 === 0 // Determine position of the image
  const imageLeft = false

  return (
    <BaseCard
      imageLeft={imageLeft}
      link={data.link}
      images={data.images}
    >
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
    </BaseCard>
  )
}

export default PortfolioCard
