import React from 'react'
import BlogCard from '../components/BlogCard'
import useGetEducation from '../hooks/useGetEducation'


const Blog: React.FC = () => {

  const posts = useGetEducation()


  return (
    <div className='w-full flex flex-col'>
      <div className='mb-6'>
        <p className='text-4xl text-center pt-4'>
          Bildung
        </p>
      </div>
      {posts && posts.map((post) => (
        <BlogCard data={post} />
      ))}
    </div>
  )
}

export default Blog
