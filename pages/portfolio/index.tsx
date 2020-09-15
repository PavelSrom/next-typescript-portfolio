import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'

const Portfolio: NextPage = () => {
  return (
    <div>
      <p>Portfolio page</p>
      <Button type="primary" size="large">
        Hello
      </Button>
      <img src="/images/IMG_0255.JPG" alt="" />
    </div>
  )
}

export default Portfolio
