import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'


interface BlogCardProps {
  id: string
  title: string
  description: string
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image }) => {
  return (
    <Row className='w-full pt-3 items-center ml-0 z-20'>
      <Col sm={2}>
        <Row>
          <Col sm={12}>
            <Row className='text-lg'>
              <div className='w-full pl-0 flex flex-row items-center'>
                <div className='h-4 w-4 mx-2 bg-black outline outline-8 outline-amber-400 rounded-full'></div>
                <div className='pl-4 flex flex-col'>
                  <span className=''>2013 Jan</span>
                  <span className=''>2014 Feb</span>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col sm={10} className='bg-white rounded py-3 glass'>
        <Row>
          <Col sm={4}>
            <Image src={image} rounded />
          </Col>
          <Col sm={8}>
            <Row className='text-2xl'>
              {title}
            </Row>
            <Row>
              {description}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BlogCard
