import {React , useState } from 'react'
import styled from 'styled-components'  
import { useNews } from '../hooks/useGetNews'
import Loader from '../components/Loader'
import Title from '../components/Title'
import  { useAuth }  from '../contexts/AuthContext'
import CategoryBox from '../components/CategoryBox'

const TopNewsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const FilterBox = styled.div`
   width: 100%;
   padding: 1rem 2rem;
`
const FilterTabs = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 20px;
    color: var(--color-primary);
    background: var(--color-info);
    font-weight: 900;
    font-size: var(--font-size-sm);
    @media (max-width : 400px){
      width: 100%;
      font-size: var(--font-size-sm);

    }
    `
const Span = styled.span`
  @media (max-width : 400px) {
      display: none;
  }
`
const FilterTab = styled.div`
     cursor: pointer;
     text-align: center;
`
const FilterdNewsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  padding: 1rem;
  gap: 1rem;
  background: var(--color-primary);
      @media (max-width : 400px){
      width: 100%;

    }
`

function Topnews() {
  const { news , Newsrefetch  , getNewsLoading } = useNews()
  const { user } = useAuth()
  const [currentNews , setCurrentNews] = useState(news)

  const FilterHandle = (params) => {
    console.log(params);
    
     switch(params) {
      case  'all' :
       setCurrentNews(news)
       break
       case  'user-fav' :
        setCurrentNews(news.filter((item) =>  item.NewsSubject === user?.FavoritesTopic))  
        
       break
       case 'old-to-new' :
           
        setCurrentNews([...news].sort((a, b) => 
          new Date(a.NewsDate) - new Date(b.NewsDate)))
       break
       case  'new-to-old' :
         setCurrentNews([...news].sort((a, b) => 
          new Date(b.NewsDate) - new Date(a.NewsDate)))
       break
       case 'most-view' :
       setCurrentNews([...news].sort((a ,b ) => 
        (b.News_view) - (a.News_view)))
       break
       
       default : setCurrentNews(news)
     }
    console.log(currentNews);
    
     
  }
  return (
    <TopNewsWrapper>
        <Title titleName={'خبر های داغ '} />
        <FilterBox>
          <FilterTabs> 
            <Span> فیلتر کردن به اساس :</Span>
            <FilterTab onClick={() => FilterHandle('all')}>همه</FilterTab>
            <FilterTab onClick={() => FilterHandle('user-fav')}> علاقه مندی</FilterTab>
            <FilterTab onClick={() => FilterHandle('old-to-new')}>قدیم به جدید</FilterTab>
            <FilterTab onClick={() => FilterHandle('new-to-old')}>جدید به قدیم</FilterTab>
            <FilterTab onClick={() => FilterHandle('most-view')}>بازدید</FilterTab>
          </FilterTabs>
            <FilterdNewsBox>
              {!getNewsLoading ?   currentNews.map((item) => {
              return  <CategoryBox key={item.id}  news={item}/>
            }) : <Loader />}
            </FilterdNewsBox>
        </FilterBox>
    </TopNewsWrapper>
  )
}

export default Topnews