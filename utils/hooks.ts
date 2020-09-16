import { useState, useEffect } from 'react'

type ReturnType = {
  width: number
  spacing: number
}

export default (): ReturnType => {
  const [width, setWidth] = useState<number>(0)
  let spacing = 0

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (typeof window !== undefined) {
    if (width < 600) {
      spacing = 40
    } else if (width >= 600 && width < 960) {
      spacing = 40
    } else if (width >= 960 && width < 1280) {
      spacing = 80
    } else if (width >= 1280 && width < 1920) {
      spacing = 80
    } else {
      spacing = 80
    }
  }

  return {
    width,
    spacing,
  }
}
