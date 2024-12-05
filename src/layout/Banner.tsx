'use client'
import React from 'react'
import SwiperEffectCard from '@/components/SwiperEffectCard'
import SwiperSlides from '@/components/SwiperSlide'


const Banner = () => {
  return (
    <div>Banner

      <div>top</div>
      <SwiperSlides className="slider px-[60px] md:px-[80px] md:h-full" dataSlide={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
      <SwiperEffectCard className="h-[300px] w-[200px] mx-auto" dataSlide={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
    </div>
  )
}
export default Banner
