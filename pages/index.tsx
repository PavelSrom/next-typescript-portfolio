import React from 'react'
import { NextPage } from 'next'
import AboutTeaser from '../components/about-teaser'
import ServiceTeaser from '../components/service-teaser'
import ContactSection from '../components/contact'

const Homepage: NextPage = () => (
  <div>
    <AboutTeaser />
    <ServiceTeaser withButton />
    <ContactSection />
  </div>
)

export default Homepage
