import React, {useEffect, useMemo, useState} from 'react'

const ScaleLayout = ({children}: { children: React.ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [isMobile, setIsMobile] = useState(false)
  const ratio = useMemo(() => screenWidth / (isMobile ? 768 : 1920), [screenWidth, isMobile])
  const handleResize = () => {
    // setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    if (window.innerWidth >= 769) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])
  return <section className={`scale-[${ratio}] absolute overflow-clip md:w-[1920px] w-[768px]  md:mt-0 origin-top-left`}>{children}</section>
}

export default ScaleLayout
