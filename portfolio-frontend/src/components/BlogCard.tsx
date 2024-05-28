import React from 'react'
import { Card, Button, Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface BlogCardProps {
  id: string
  title: string
  description: string
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image }) => {
  return (
    <Row className='w-full pt-3 items-center ml-0'>
      <Col sm={3}>
        <Row>
          <Col sm={12}>
            <Row className='text-lg'>
              <div className='w-full bg-green-200 pl-0 flex flex-row items-center'>
                <div className='h-4 w-4 mx-2 bg-black outline outline-8 outline-amber-400 rounded-full'></div>
                <div className='pl-4 flex flex-col'>
                  <span className=''>2013 Jan</span>
                  <span className=''>2014 Feb</span>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        {
          false &&
          <>
            <Row className='items-center'>
              <Col sm={6} className='text-right -mt-1 pr-6 text-xl font-bold'>2013</Col>
              <Col sm={6} className='h-2 bg-green-300 rounded-l'>
                <Row className='-mt-1'>
                  <p className='h-4 w-4 bg-black outline outline-8 outline-green-300 rounded-full'></p>
                  <p className='-mt-1'>
                    Feb 2013
                  </p>
                </Row>
              </Col>
            </Row>
          </>
        }
      </Col>
      <Col sm={9} className='bg-white rounded py-3'>
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
