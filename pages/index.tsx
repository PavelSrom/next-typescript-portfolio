import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import HomeLanding from '../components/home-landing'
import AboutTeaser from '../components/about-teaser'
import ServiceTeaser from '../components/service-teaser'
import ContactSection from '../components/contact'

const Homepage: NextPage = () => (
  <>
    <Head>
      <title>Home | Pavel Srom</title>
      <meta
        name="description"
        content="Pavel Srom is a full-stack web developer currently living and studying in Copenhagen. He loves React, and the whole JavaScript ecosystem."
      />
    </Head>
    <HomeLanding />
    <AboutTeaser />
    <ServiceTeaser withButton />
    <ContactSection />
  </>
)

export default Homepage
