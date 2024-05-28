import React from 'react'
import BlogCard from '../components/BlogCard'


interface BlogProps {
  useHook?: () => any[] // replace any with the actual type returned by the hooks
  title?: string
}

const Blog: React.FC<BlogProps> = ({ title, useHook }) => {

  const posts = useHook ? useHook() : []


  return (
    <div className='w-full flex flex-col'>
      <div className='mb-6'>
        <p className='text-4xl text-center pt-4'>
          {
            title ? title : 'Blog'
          }
        </p>
      </div>
      {posts && posts.map((post) => (
        <BlogCard data={post} />
      ))}
    </div>
  )
}

export default Blog
