import React from 'react'
import { useNews } from '../hooks/useGetNews'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import PersianDate from '../services/PersionDate'


const FilterdList = styled.div`
  width: 90%;
  margin: 15px auto;
  background-color: white;
`

const FilterItemLink = styled(Link)`
  text-decoration: none;
  display: block;
`
const FiltredItemCard = styled.div`
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
`
const Div = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-primary);
`

const FiltredItemTitle = styled.div`
  color: var(--color-accent);
  font-size: var(--font-size-xl);
  flex-grow: 1;
`
const FiltredItemContent = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  `
  const FiltredDate = styled.div`
      color: var(--color-accent);
      opacity: 0.7;
  `
function MainNewsSction() {
    const { news }  =  useNews()
    const FilterdNews = news.slice(-6)
  return (
         <FilterdList>
                  {news && news.length !== 0 ? 
                       FilterdNews?.map((item) => (
                    <FilterItemLink key={item.id} to={`/news/${item.id}`}>
                      <FiltredItemCard>
                        <FiltredItemContent>
                          <Div />
                          <FiltredItemTitle>{item.NewsTitle}</FiltredItemTitle>
                          <FiltredDate >{PersianDate(item)}</FiltredDate>
                        </FiltredItemContent>
                      </FiltredItemCard>
                    </FilterItemLink>
                  )) 
                      :  <Loader />}
                </FilterdList>
  )
}

export default MainNewsSction