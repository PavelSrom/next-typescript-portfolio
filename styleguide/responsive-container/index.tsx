import React from 'react'
import {} from 'antd'

// work in progress
const ResponsiveContainer: React.FC = ({ children }) => {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 0' }}>{children}</div>
  )
}

export default ResponsiveContainer
