import React from 'react'
import { NextPage } from 'next'

import ShortIntro from '../../components/short-intro'
import AboutDetailed from '../../components/about-detailed'

const About: NextPage = () => {
  return (
    <>
      <ShortIntro />
      <AboutDetailed />
    </>
  )
}

export default About
