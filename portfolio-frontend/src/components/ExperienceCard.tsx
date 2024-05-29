import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { ApiBlogData } from '../hooks/useGetExperience'


const EducationCard: React.FC<{ data: ApiBlogData }> = ({ data }) => {

  return (
    <Row className='w-full m-0 p-0'>
      <Col sm={1} className='m-0 p-0 justify-center'>
        <Row className='w-full h-full m-0 flex flex-col'>
          <div className='p-0 m-0 w-1 h-full flex flex-col items-center bg-slate-500'>
            <Icon.BriefcaseFill className='bg-blue-200 text-slate-700 text-5xl rounded-full p-2' />
          </div>
        </Row>
      </Col>
      <Col sm={11} className='bg-white rounded py-3 glass mb-4'>
        <Row className='align-items-center'>
          <Col sm={3}>
            {data.images ?
              data.images.map((image, index) => (
                <Image key={index} src={image} rounded />
              )) :
              <Image src='https://via.placeholder.com/600x400' rounded />
            }
          </Col>
          <Col sm={9}>
            <div>
              <Row className='font-semibold'>
                {`${data.start_date} - ${data.end_date}`}
              </Row>
              <Row className='text-2xl font-semibold'>
                {`${data.title}, ${data.location}`}
              </Row>
              <Row className='font-bold text-xl'>
                {data.job_title && data.job_title}
              </Row>
              <Row>
                <ul>
                  {data.description && data.description.map((desc, index) => (
                    <li key={index} className='list-disc'>{desc}</li>
                  ))}
                </ul>
              </Row>
              <Row>
                <div className='p-0'>
                  {data.link && <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">Webseite besuchen</a>}
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default EducationCard
