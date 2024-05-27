import React from 'react'
import BlogCard from '../components/BlogCard'


const Blog: React.FC = () => {

  // const posts = useGetEducation()

  const posts = [
    { id: '1', title: 'First Post', description: 'This is the first post.', image: 'https://via.placeholder.com/600x400' },
    { id: '2', title: 'Second Post', description: 'This is the second post.', image: 'https://via.placeholder.com/600x400' },
    { id: '3', title: 'Third Post', description: 'This is the third post.', image: 'https://via.placeholder.com/600x400' },
    { id: '4', title: 'First Post', description: 'This is the first post.', image: 'https://via.placeholder.com/600x400' },
    { id: '5', title: 'Second Post', description: 'This is the second post.', image: 'https://via.placeholder.com/600x400' },
    { id: '6', title: 'Third Post', description: 'This is the third post.', image: 'https://via.placeholder.com/600x400' }
  ]

  return (
    <div className='w-full'>
      <p className='text-4xl text-center pt-4 pb-2'>
        Bildung
      </p>
      {posts.map((post) => (
        <BlogCard key={post.id} id={post.id} title={post.title} description={post.description} image={post.image} />
      ))}
    </div>
  )
}

export default Blog
