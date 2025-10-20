import React from 'react'
import styled from 'styled-components' 
import Title from './Title'
import CategoryBox from './CategoryBox'
const CategoryContainer = styled.main`
  width: 100%;
  background: transparent;
  gap: 20px;
  padding: 35px 30px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  
  
`
const BoxsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px 15px;
  margin-top: 20px;
`
function CategoryBoxs({datas , subject}) {
  console.log(datas);
  const newsData = datas.filter(data => data.subject === subject)
  console.log(newsData);
  if(newsData.length === 0) return null
  
  return (
    <CategoryContainer>
      <Title titleName={subject}/>
    <BoxsContainer>
           {newsData.map((item, index) => {
    return <CategoryBox key={index}  news ={item} />
})}
    </BoxsContainer>
    </CategoryContainer>
  )
}

export default CategoryBoxs