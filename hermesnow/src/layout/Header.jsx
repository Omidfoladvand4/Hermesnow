import React from 'react'
import HeaderBannar from '../ui/header/HeaderBannar'
import Slider from '../components/Slider'
const sliderimage = [
  'images/slideImage-1.jpg' ,
  'images/slideImage-2.jpg' ,
  'images/slideImage-3.jpg' ,
  'images/slideImage-4.jpg' ,
  'images/slideImage-5.jpg' ,
  'images/slideImage-6.jpg' ,
]
function Header() {
  return (
    <div>
      <HeaderBannar />
      <Slider images={sliderimage} slidesPerView={2}/>
    </div>
  )
}

export default Header