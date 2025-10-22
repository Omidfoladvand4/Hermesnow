import React from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import formatNumber from '../utils/formartNumber';
const NewsBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 10px;
  background: var(--color-secondary);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in;
  border-bottom: 10px solid #000000;
  opacity: 0.8;
  &:hover {
    transform: translateY(15px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.03);
    opacity: 1;
  }

`
const NewsContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const NewsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DateAndTime = styled.div`
   display: flex;
   align-items: end;
   justify-content: center;
   color: var(--color-info);
`
const NewsSubject = styled.div`
font-size: 14px;
  font-weight: 900;
  color: var(--color-accent);
`
const NewsTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: larger;
  font-weight: bolder;
  text-align: center;
  color: var(--color-primary);
  border-bottom: 1px solid;
  overflow: hidden;

`
const FooterCategoryBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 0;
`
const Div = styled.div`
  width: 50px;
   height: 15px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color-info);
  color: #ffffff;
`
const I = styled.i`
  width: 70px;
  height: 15px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  cursor: pointer;
`
function CategoryBox({news}) {
  
  return (
    <NewsBox>
       <ImageBox $src={news.mainImage} $w='45%' $h='150px'/>
      <NewsContentWrapper>
        <NewsTitle>{news.title}</NewsTitle>
         <NewsContent>
          <NewsSubject>{news.subject}</NewsSubject>
          <DateAndTime >{news.date} / {news.time} </DateAndTime>
       </NewsContent>
        <FooterCategoryBox>
          <Div><div style={{display : 'flex' , alignItems : "center"}}><RemoveRedEyeIcon  fontSize='smaller'/> </div>{formatNumber(news.view)}</Div> <Div>{news.country}</Div>
          <I >{news.author}</I>
        </FooterCategoryBox>
      </NewsContentWrapper>
    </NewsBox>
  )
}

export default CategoryBox