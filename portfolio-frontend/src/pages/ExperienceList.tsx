import React from 'react'
import useGetExperience from '../hooks/useGetExperience'
import ExperienceCard from '../components/ExperienceCard'


const ExperienceList: React.FC<{}> = () => {

  const posts = useGetExperience()

  return (
    <div className='w-full flex flex-col'>
      <div className='mb-6'>
        <p className='text-4xl text-center pt-4'>
          Arbeitserfahrung
        </p>
      </div>
      {posts && posts.map((post) => (
        <ExperienceCard data={post} />
      ))}
    </div>
  )
}

export default ExperienceList
