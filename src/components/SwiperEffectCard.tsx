'use client'
import React, {memo} from 'react'
import {EffectCards, Swiper, SwiperSlide} from '@/utils/moduleSwiper'

const SwiperEffectCard = ({dataSlide, className}: { dataSlide: number[], className: string }) => {
  return <div className={className}>
    <Swiper
      effect={'cards'}
      defaultValue={1}
      grabCursor={true}
      initialSlide={2}
      modules={[EffectCards]}
      loop={true}
      centeredSlides={true}
      cardsEffect={{
        rotate: true,
        slideShadows: true,
        perSlideOffset: 10,
        perSlideRotate: 0,
      }}
      className="mySwiper h-full"
    >
      {dataSlide.map((item, index) => <SwiperSlide tabIndex={0} className="bg-amber-500">Slide {index}</SwiperSlide>)}
    </Swiper>
  </div>
}
export default memo(SwiperEffectCard)
