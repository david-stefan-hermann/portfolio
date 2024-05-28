import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'


interface BlogCardData {
  site?: string
  location?: string
  study?: string
  start_date?: string
  end_date?: string
  link?: string
  images?: string[]
}

const BlogCard: React.FC<{ data: BlogCardData }> = ({ data }) => {
  return (
    <Row className='w-full pt-3 items-center ml-0 z-20'>
      <Col sm={2}>
        <Row>
          <Col sm={12}>
            <Row className='text-lg'>
              <div className='w-full pl-0 flex flex-row items-center'>
                <div className='h-4 w-4 mx-2 bg-black outline outline-8 outline-amber-400 rounded-full'></div>
                <div className='pl-4 flex flex-col'>
                  <span className=''>{data.end_date}</span>
                  <span className=''>{data.start_date}</span>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col sm={10} className='bg-white rounded py-3 glass'>
        <Row>
          <Col sm={4}>
            {data.images ?
              data.images.map((image, index) => (
                <Image key={index} src={image} rounded />
              )) :
              <Image src='https://via.placeholder.com/600x400' rounded />
            }
          </Col>
          <Col sm={8}>
            <Row className='text-2xl'>
              {`${data.location}, ${data.site}`}
            </Row>
            <Row>
              {data.study}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BlogCard
