import React from 'react'
import {Autoplay, Swiper, SwiperSlide} from '@/utils/moduleSwiper'

const SwiperSlides = ({className}: { className: string }) => {
  return <div className={className}>
    <Swiper
      className="mySwiper"
      slidesPerView={1.1}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      autoplay={{delay: 3000}}
      modules={[Autoplay]}
      coverflowEffect={{
        stretch: 0,
        depth: 300,
        rotate: 0,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        nextEl: '.slider .next-btn',
        prevEl: '.slider .prev-btn',
      }}
      loop={true}
      cssMode={false}
      initialSlide={2}
      onSlideChange={(swiper) => {
        // setIdSlide(swiper.realIndex)
        // indexRef.current = swiper.realIndex
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1, 1, 1, 1, 1,].map((_, index) => (
        // <SwiperSlide className="">
        //   {/*<img className="w-full" src={`${PATH}/assets/img/slider-${index + 1}.png?v=1`}/>*/}
        // </SwiperSlide>
        <SwiperSlide key={index} tabIndex={0} className="bg-amber-500 w-[585px] md:w-auto">Slide {index}</SwiperSlide>
      ))}
    </Swiper>

    {/*<div className="control absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">*/}
    {/*  <div className="prev-btn cursor-pointer" onClick={handlePrevSlide}>*/}
    {/*    <img loading="lazy" src={`${PATH}/assets/img/prev-slider.png`}/>*/}
    {/*  </div>*/}
    {/*  <div className="next-btn cursor-pointer" onClick={handleNextSlide}>*/}
    {/*    <img loading="lazy" src={`${PATH}/assets/img/next-slide.png`}/>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<div*/}
    {/*  id="pagination"*/}
    {/*  className="pagination flex items-center left-[200px] gap-[55px] md:left-[480px] md:gap-[90px] justify-center absolute z-10 -bottom-[44px]">*/}
    {/*  {sliderData.map((_, index) => (*/}
    {/*    <span className={` ${idSlide === index ? 'myActiveBullet' : 'myBullet'} `} onClick={() => handleClickPagination(index)} key={index}></span>*/}
    {/*  ))}*/}
    {/*</div>*/}

    {/*<div className="track md:w-[480px] w-[320px] absolute border-dotted -bottom-[30px] left-[210px] md:left-[484px] border-[#fbf2a7] border-t-4 "></div>*/}
  </div>
}
export default SwiperSlides
