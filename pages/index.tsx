import React from 'react'
import { NextPage } from 'next'
import ServiceTeaser from '../components/service-teaser'

const Homepage: NextPage = () => (
  <div>
    <ServiceTeaser withButton />
  </div>
)

export default Homepage
