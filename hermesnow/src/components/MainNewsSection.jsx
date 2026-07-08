import React from "react";
import { useNews } from "../hooks/useGetNews";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PersianDate from "../services/PersionDate";
import Loader from "./Loader";

const FilteredList = styled.div`
  width: 90%;
  margin: 15px auto;
  background-color: white;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const FilteredItemLink = styled(Link)`
  text-decoration: none;
  display: block;
`;
const FilteredItemCard = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  border-bottom: 2px solid var(--color-primary);
  transition: all 0.2s ease;
  opacity: 0.7;

  &:hover {
    transform: scale(1.01);
    opacity: 1;
  }
`;
const Div = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-primary);
`;

const FilteredItemTitle = styled.div`
  width: 90%;
   white-space: nowrap;       
    overflow: hidden;         
    text-overflow: ellipsis;    
    display: block;   
  color: var(--color-accent);
  font-size: var(--font-size-xl);
`;
const FilteredItemContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  @media (max-width: 400px) {
    justify-content: space-between;
    gap: 5px;
  }
`;
const FilteredDate = styled.div`
  color: var(--color-accent);
  opacity: 0.7;
  font-size: var(--font-size-base);
  @media (max-width : 480px) {
     display: none;
  }
`;
function MainNewsSection() {
  const { news  , getNewsLoading} = useNews();
  const filterdNews = news?.slice(-6) || [];
  if(getNewsLoading) return <Loader />
  return (
    <FilteredList>
      {filterdNews.length > 0 && (
        filterdNews.map((item) => (
          <FilteredItemLink key={item.id} to={`/news/${item.id}`}>
            <FilteredItemCard>
              <FilteredItemContent>
                <Div />
                <FilteredItemTitle>{item.NewsTitle}</FilteredItemTitle>
                <FilteredDate>{PersianDate(item)}</FilteredDate>
              </FilteredItemContent>
            </FilteredItemCard>
          </FilteredItemLink>
        ))
      )}
    </FilteredList>
  );
}

export default React.memo(MainNewsSection);
