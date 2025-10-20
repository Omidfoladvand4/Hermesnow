import React from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const NewsBox = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  background: var(--color-secondary);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in;
  border-bottom: 10px solid #000000;
  &:hover {
    transform: translateY(15px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.03);
  }

`
const NewsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid  var(--color-primary);
`
const DateAndTime = styled.div`
   display: flex;
   align-items: end;
   justify-content: center;
   color: var(--color-info);
`
const NewsSubject = styled.div`
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
  overflow: hidden;

`
const FooterCategoryBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
`
const Div = styled.div`
width: 100px;
height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: var(--color-info);
  color: #ffffff;
`
const I = styled.i`
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  cursor: pointer;
`
function CategoryBox({news}) {
  return (
    <NewsBox>
       <ImageBox $src={news.mainImage} $w='100%' $h='150px'/>
       <NewsContent>
          <NewsSubject>{news.subject}</NewsSubject>
          <DateAndTime >{news.date} / {news.time} </DateAndTime>
       </NewsContent>
        <NewsTitle>{news.title}</NewsTitle>
        <FooterCategoryBox>
          <Div><div><ThumbUpIcon /> </div>{news.likes}</Div> <Div>{news.country}</Div>
          <I >{news.author}</I>
        </FooterCategoryBox>
    </NewsBox>
  )
}

export default CategoryBox