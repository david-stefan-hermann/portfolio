import React from 'react'
import BlogCard from '../components/BlogCard'
import useGetEducation from '../hooks/useGetEducation'


const Blog: React.FC = () => {

  const posts = useGetEducation()


  return (
    <div className='w-full timeline flex flex-col'>
      <div className='z-10 bg-white pb-10 -mb-10'>
        <p className='text-4xl text-center pt-4 pb-2'>
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
