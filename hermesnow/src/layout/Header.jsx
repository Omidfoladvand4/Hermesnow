import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBannar from '../ui/header/HeaderBannar'
import Slider from '../layout/Slider'
import styled from 'styled-components'
import bannerImage from '../assets/HermesNowBannar1.jpg'
import { useNews } from '../hooks/useGetNews'
import Loader from '../components/Loader'

const HeaderWrapper = styled.div`
  display: flex;
  height: 400px;
  gap: 5px;
  padding: 10px 20px;
  @media (max-width : 780px) {
     flex-direction: column;
     height: auto;
  }

`

const MainNews = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    transform: scale(1.02);
  }
    @media (max-width : 780px) {
    width: 100%;
  }

`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const TopNewsTitle =  styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  padding: 20px 10px;
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  font-weight: 900;
  
`
function Header() {
  const { news } = useNews()
  const lastNews = [...news].reverse()
  const mostRecentNews = lastNews[0] 


  if (!news || news.length === 0) {
    return (
      <HeaderWrapper>
        <HeaderBannar />
        <MainNews> <Loader /> </MainNews>
      </HeaderWrapper>
    )
  }

  return (
    <HeaderWrapper>
      <HeaderBannar />
      <MainNews>
        <Image 
          src={mostRecentNews?.MainImage || bannerImage} 
          alt={mostRecentNews?.MainTitle || 'خبر اصلی'} 
        />
         <Link to ={`/news/${mostRecentNews.id}`}>
      <TopNewsTitle>

         {mostRecentNews.NewsTitle}
      </TopNewsTitle>
         </Link>
      </MainNews>
    </HeaderWrapper>
  )
}

export default Header