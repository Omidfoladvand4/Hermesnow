import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import  ImageBox from '../../components/ImageBox'
import BoxesGrid from './HeaderBoxList'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Bannar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--color-accent);
    position: relative;
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
   max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  animation: ${props => props.$isOpen ? css`${SlideDown} 0.5s ease-in-out` : css`${SlideUp} 0.5s ease-in-out`};
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
const BannarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 25px;
  background: var(--color-info);
  position: absolute;
  border-end-end-radius: 15px;
  border-start-start-radius: 15px;
  cursor: pointer;
  color: withe;
  top: 0;
  z-index: 80;
  
`
const SlideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px) scale(.5);
  }
  to {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`
const SlideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0) scale(0.5);
  }
  to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px);
  }
`
function HeaderBannar() {
  const [isOpenBannar , setIsOpenBannar] = useState(false)
  return (
    <Bannar >
      <BannarIcon onClick={() => setIsOpenBannar(prev => !prev)}>{!isOpenBannar ? <ArrowDownwardIcon  htmlColor='#ffffff'/> : 
      <ArrowUpwardIcon   htmlColor='#ffffff'/>}</BannarIcon>
     <Navbar>
     <ImageBox $src= '/images/HermesNowBannar.jpg'  $w= '500px' $h='150px' />
    <BannarContent>  – هر لحظه، هر خبر، سریع و 
خبرهایی که مهم‌اند، بدون تأخیر به دستت می‌رسند.
از تحولات جهانی تا تازه‌ترین اخبار محلی، همه را در یک نگاه ببین.</BannarContent>
     </Navbar>
     {isOpenBannar ?  <MainHeader $isOpen ={isOpenBannar}>
     <BoxesGrid />
     <MainHeaderImage src='/images/Hermes Digital Icon with Newspaper.jpg'  alt="" />
     </MainHeader> : ''}
     
  </Bannar>
  )
}

export default HeaderBannar