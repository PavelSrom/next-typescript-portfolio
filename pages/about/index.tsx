import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import DayCount from '../../components/day-count'
import ShortIntro from '../../components/short-intro'
import AboutDetailed from '../../components/about-detailed'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Pavel Srom</title>
        <meta
          name="description"
          content="Pavel Srom is a full-stack web developer currently living and studying in Copenhagen. He loves React, and the whole JavaScript ecosystem."
        />
      </Head>
      <DayCount />
      <ShortIntro />
      <AboutDetailed />
    </>
  )
}

export default About
