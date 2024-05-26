import React from 'react'
import { faUniversity, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Icon from '../components/Icon'

const About: React.FC = () => {
  return (
    <>
      <h1 className="text-6xl mb-4 font-bold">David Hermann</h1>
      <h2 className="text-3xl mb-2 font-semibold">Systemadministrator</h2>
      <p className="text-xl">
      <Icon icon={faInfoCircle} />
      Hi, I'm David, an IT student based in [Your Location]. 
      </p>
      <p className="text-xl mt-2">
      <Icon icon={faUniversity} />
      Angewandte Informatik (B.Sc) 2021 -</p>
      <p className="text-xl mt-2">I have a passion for [Your Passion] and am always eager to learn more about [Your Interest].</p>
      <p className="text-xl mt-2">In my free time, I enjoy [Your Hobby].</p>
    </>
  )
}

export default About
