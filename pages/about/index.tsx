import React from 'react'
import { NextPage } from 'next'

import DayCount from '../../components/day-count'
import ShortIntro from '../../components/short-intro'
import AboutDetailed from '../../components/about-detailed'

const About: NextPage = () => {
  return (
    <>
      <DayCount />
      <ShortIntro />
      <AboutDetailed />
    </>
  )
}

export default About
