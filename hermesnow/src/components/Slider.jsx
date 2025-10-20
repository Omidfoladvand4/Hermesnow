import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import 'swiper/css'
import ImageBox from './ImageBox'
const SliderContainer = styled.div`
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 30px;

`
const SlideWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease-in;
    &:hover {
       transform: scale(1.3);
    }
`
function Slider({images , spaceBetween = 10 , slidesPerView = 3 }) {
  return (
    <SliderContainer>
      <Swiper 
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
         noSwiping={true}
         preventInteractionOnTransition={true}
           autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: '100%',
          height: '300px',
          borderRadius: '10px',
        }}
      >
       {images.map((item, index) => {
    return (
        <SlideWrapper key={index}>
            <SwiperSlide>
                <ImageBox $src={item} $w='100%' $h='300px' />
            </SwiperSlide>
        </SlideWrapper>
    )
})}
      </Swiper>
    </SliderContainer>
  )
}

export default Slider