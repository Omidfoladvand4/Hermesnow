import React from 'react'
import HeaderBannar from '../ui/header/HeaderBannar'
import Slider from '../components/Slider'
const sliderimage = [
  'https://hflznaywvonjgrjpmkdw.supabase.co/storage/v1/object/public/News_Images/1771770790110-g2kch8.jpg' ,
  'https://hflznaywvonjgrjpmkdw.supabase.co/storage/v1/object/public/News_Images/1771783599016-hdx9mp.jpg' ,
  'https://hflznaywvonjgrjpmkdw.supabase.co/storage/v1/object/public/News_Images/1771847177415-8zhmos.webp' ,
  'https://hflznaywvonjgrjpmkdw.supabase.co/storage/v1/object/public/News_Images/1771847339251-pn5wpo.webp',
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