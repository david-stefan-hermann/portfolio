import React from 'react'
import { ApiBlogData } from '../hooks/useGetExperience'
import Typography from '@mui/material/Typography'
import BaseCard from './BaseCard'

const ExperienceCard: React.FC<{ index: number, data: ApiBlogData }> = ({ index, data }) => {
  //const imageLeft = index % 2 === 0 // Determine position of the image
  const imageLeft = true

  return (
    <BaseCard
      imageLeft={imageLeft}
      link={data.link}
      images={data.images}
    >
      <Typography variant="h5" component="div" color="text.primary">
        {data.job_title || "Untitled"}
      </Typography>
      <Typography variant="h6" component="div" color="text.primary">
        {data.title || "Untitled"}
        {data.location && `, ${data.location}`}
      </Typography>
      {data.start_date && data.end_date && (
        <Typography gutterBottom variant="body2" color="text.primary" fontWeight="bold">
          {data.start_date} - {data.end_date}
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

export default ExperienceCard
