import React from 'react'
import HeaderBannar from '../ui/header/HeaderBannar'
import Slider from '../components/Slider'
import animal from '../assets/animal.jpg'
import bee from '../assets/bee.jpg'
import f18 from '../assets/f-18.jpg'
import s400 from '../assets/s400.jpg'

const sliderimage = [ animal, bee, f18, s400]
function Header() {
  return (
    <div>
      <HeaderBannar />
      <Slider images={sliderimage} slidesPerView={1}/>
    </div>
  )
}

export default Header