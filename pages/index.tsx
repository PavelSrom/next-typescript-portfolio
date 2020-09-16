import React from 'react'
import { NextPage } from 'next'
import ServiceTeaser from '../components/service-teaser'
import ContactSection from '../components/contact'

const Homepage: NextPage = () => (
  <div>
    <ServiceTeaser withButton />
    <ContactSection />
  </div>
)

export default Homepage
