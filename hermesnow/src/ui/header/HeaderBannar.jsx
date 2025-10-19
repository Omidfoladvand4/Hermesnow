import React from 'react'
import styled from 'styled-components'
import  ImageBox from '../../components/ImageBox'
import BoxesGrid from './HeaderBoxList'
const Bannar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--color-accent);
`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const BannarContent = styled.div`
    width: 65%;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    padding: 0 25px;
    color: var(--color-secondary);
    flex-wrap: wrap;
`
const MainHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--color-primary);
`
const MainHeaderImage = styled.img`
  width: 150px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  animation:  Imageanimate 1s infinite;
  @keyframes Imageanimate {
     from {
       transform: rotate(0) scale(1) ;
       opacity: 1;
     }
     to{
     transform: rotate(360deg) scale(2);
     opacity: 0;
     }
  }
`
function HeaderBannar() {
  return (
    <Bannar >
     <Navbar>
     <ImageBox $src= '/images/HermesNowBannar.jpg'  $w= '80px' $h='100px' />
    <BannarContent>  – هر لحظه، هر خبر، سریع و 
خبرهایی که مهم‌اند، بدون تأخیر به دستت می‌رسند.
از تحولات جهانی تا تازه‌ترین اخبار محلی، همه را در یک نگاه ببین.</BannarContent>
     </Navbar>
     <MainHeader>
     <BoxesGrid />
     <MainHeaderImage src='/images/Hermes Digital Icon with Newspaper.jpg'  alt="" />
     </MainHeader>
  </Bannar>
  )
}

export default HeaderBannar