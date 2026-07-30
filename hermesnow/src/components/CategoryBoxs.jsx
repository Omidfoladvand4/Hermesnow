import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";
import CategoryBox from "./CategoryBox";
import { fadeIn } from "../styles/animations";

const CategoryContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--color-info);
`;
const CategoryBoxWrapper = styled.div`
  width: 90%;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: start;
  margin: 0 auto;
  padding: 10px;
  animation: ${fadeIn} 0.5s ease;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const CategoryNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 7%;
  margin: 0 auto;
  background-color: white;
`;
const CategoryTitle = styled.h1`
  font-weight: 900;
  font-size: var(--font-size-xxl);
`;
const CategoryNavbarBox = styled.div``;
const Button = styled.button`
  cursor: pointer;
  font-size: var(--font-size-xxl);
  padding: 5px 20px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 5px;
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.04);
  }
  @media (max-width: 400px) {
    padding: 0 10px;
    font-size: var(--font-size-xl);
  }
`;
const HeaderNews = styled.div`
  width: 60%;
  max-height: 60vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 400px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HeaderNewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const HeaderNewsTitle = styled.div`
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-accent);
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 20px;
    white-space: nowrap;       
    overflow: hidden;         
    text-overflow: ellipsis;  
    max-width: 100%;          
    display: block;            
  font-size: var(--font-size-xl);
  @media (max-width: 768px) {
    background-color: inherit;
  }
`;
const BoxsContainer = styled.div`
  width: 60%;
  padding: 35px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px 15px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1px 0;
    gap: 1px;
  }
`;

function BoxesContainer({ datas, subject }) {
  
  let filtredNewsData = datas.filter((data) => {
    return data.NewsSubject === subject;
  });
  
  if (filtredNewsData.length > 4) {
    filtredNewsData = filtredNewsData.slice(-4);
  }
  const latestNews = filtredNewsData[0];


  if (filtredNewsData.length === 0) return null;

  return (
    <CategoryContainer>
      <CategoryNavbar>
        <CategoryTitle>{subject}</CategoryTitle>
        <CategoryNavbarBox>
          <Link to={`/category/${subject}`}>
            <Button>بیشتر</Button>
          </Link>
        </CategoryNavbarBox>
      </CategoryNavbar>
      <CategoryBoxWrapper>
        <HeaderNews>
         <Link to={`/news/${latestNews?.id}`}>
          <HeaderNewsImage src={latestNews?.MainImage} alt={latestNews?.NewsTitle}/>
         </Link>  
          <HeaderNewsTitle>{latestNews?.NewsTitle}</HeaderNewsTitle>
        </HeaderNews>
        <BoxsContainer>
          {filtredNewsData.map((item, index) => {
            return (
              <Link key={item.Id || index} to={`/news/${item.id}`}>
                <CategoryBox news={item} />
              </Link>
            );
          })}
        </BoxsContainer>
      </CategoryBoxWrapper>
    </CategoryContainer>
  );
}

export default React.memo(BoxesContainer);
