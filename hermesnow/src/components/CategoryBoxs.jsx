import React from "react";
import styled from "styled-components";
import Title from "./Title";
import CategoryBox from "./CategoryBox";
import { Link } from "react-router-dom";

const CategoryContainer = styled.main`
  width: 100%;
  gap: 20px;
  background: var(--color-primary);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.05);
`;
const CategoryNavbar = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
  margin: 0 auto;
`;
const CagegoryNavbarBtn = styled.div`
  cursor: pointer;
  font-size: var(--font-size-md);
`;
const BoxsContainer = styled.div`
  background: var(--color-secondary);
  padding: 35px 30px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px 15px;
  margin-top: 20px;
  border-bottom: 2px var(--color-accent);
`;

function CategoryBoxs({ datas, subject = "خبر های دیگر در این مورد " }) {
  console.log("دیتای دریافتی در CategoryBoxs:", datas);
  console.log("موضوع:", subject);

  const newsData = datas.filter((data) => data.NewsSubject === subject);
  newsData.length = 3;
  console.log("دیتای فیلتر شده برای این موضوع:", newsData);

  if (newsData.length === 0) return null;

  return (
    <CategoryContainer>
      <CategoryNavbar>
        <Title font={`var(--font-size-md)`} titleName={`${subject} `} />
        <CagegoryNavbarBtn>
          <Link to={`/category/${subject}`}>همه </Link>
        </CagegoryNavbarBtn>
      </CategoryNavbar>
      <BoxsContainer>
        {newsData.map((item, index) => {
          return (
            <Link key={item.Id || index} to={`/news/${item.id}`}>
              <CategoryBox news={item} />
            </Link>
          );
        })}
      </BoxsContainer>
    </CategoryContainer>
  );
}

export default CategoryBoxs;
