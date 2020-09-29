import React from 'react'
import { NextPage } from 'next'
import HomeLanding from '../components/home-landing'
import AboutTeaser from '../components/about-teaser'
import ServiceTeaser from '../components/service-teaser'
import ContactSection from '../components/contact'

const Homepage: NextPage = () => (
  <>
    <HomeLanding />
    <AboutTeaser />
    <ServiceTeaser withButton />
    <ContactSection />
  </>
)

export default Homepage
