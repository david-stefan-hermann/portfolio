import React from 'react'
import EducationCard from '../components/EducationCard'
import useGetEducation from '../hooks/useGetEducation'


const EducationList: React.FC<{}> = () => {

  const posts = useGetEducation()

  return (
    <div className='w-full flex flex-col'>
      <div className='mb-6'>
        <p className='text-4xl text-center pt-4'>
          Bildungsweg
        </p>
      </div>
      {posts && posts.map((post) => (
        <EducationCard data={post} />
      ))}
    </div>
  )
}

export default EducationList
