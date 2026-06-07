import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from '../components/Sidebar'
import CategoryBoxs from "../components/CategoryBoxs";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMenu from "../ui/menu/UserMenu";
import SearchNewsBox from "../components/SearchNewsBox";
import MainNewsSction from "../components/MainNewsSction";
import { useNews } from "../hooks/useGetNews";
const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
  @media (max-width : 400px) {
     flex-direction: column;
     margin: 6px 0;
  }
    @media (max-width : 768px) {
      width: 100%;
     flex-direction: column;
     align-items: center;
     margin: 15px 0;
  }
  `
const MainContent = styled.div`
  max-width: 70%;
  flex-grow : 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 13px 20px;
    @media (max-width : 768px) {
     max-width: 100%;
     padding: 0;
  }
`
const MainNews = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    transition : all 0.3s ease ;
    border-radius: 5px;
    overflow: hidden;
      &:hover {
        transform:  scale(1.02);
      }
    `
const MainNewsWrapper = styled.div`
display: flex;
flex: 1;
max-width: 100%;
align-items: center;
justify-content: center;
gap: 5px;
margin-top: 15px;
padding: 20px 0;
overflow: hidden;
@media (max-width : 768px) {
   margin: 0 auto;

}
`
const MainNewsImage = styled.img`
   width: 100%;
   height: 150px;
   object-fit: cover;

`
const MainNewsTitle = styled.p`
  position: absolute;
  right: 10px;
  bottom: 5px;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
`
const SearchNewsContent = styled.div`
width: 100%;
height: 200px;
overflow-y: scroll;
display: flex;
align-items: center;
justify-content: start;
flex-wrap: wrap;
background-color: var(--color-primary);
gap: 10px;
`
 const  SearchNewsContentWrapper = styled.div`
   width: 30%;
   height: 150px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction : column;
   background-color: var(--color-accent);
   color: white;
   transition: all 0.3s ease;
   &:hover {
    transform: scale(1.05);
   }
   img{
    width: 100%;
    height: 100px;
    object-fit: cover;
   }
   p{
    margin: 5px;
   }
`
function Home() {
  const { news } = useNews()
  const [searchedNews, setSearchedNews] = useState([])
const newsSubjects = [...new Set(news.map(item => item.NewsSubject))]
  const mainNews = [...new Map( news.map(news => [news.NewsSubject, news])).values()].slice(-3)

  const FiltredNews = (value) => {
    if(!value) {
      setSearchedNews('')
      
    }else{
      const  filredNewsList =  news.filter((item) =>   item.NewsTitle.includes(value))
      setSearchedNews(filredNewsList)
      
  }
  }
 return (
  <div>
    <Header />
    <Main>
         <MainContent > 
               {news.length !== 0  ?
                  <div>
                    <SearchNewsBox  filterNewsHandler={FiltredNews}/>
                   { searchedNews.length !== 0 && 
                     <SearchNewsContent>
                      {searchedNews && searchedNews.map((item) => (
                        <SearchNewsContentWrapper>
                            <img src={item.MainImage} alt=""  style={{width : '250px'}}/>
                             <p>{item.NewsTitle}</p>
                        </SearchNewsContentWrapper>
                      ))}
                    </SearchNewsContent>
                    }
                   <MainNewsWrapper>
                    {mainNews && mainNews.length !== 0 ?
                       mainNews.map((item) => {
                      return   <MainNews >
                           <Link to={`/category/${item.NewsSubject}`} >
                        
                        <MainNewsImage src= {item.MainImage} />
                         <MainNewsTitle>{item.NewsSubject}</MainNewsTitle>
                        </Link>
        
                    </MainNews>
                       })
                       :
                       ""
                    }
                   </MainNewsWrapper>
                    
                  </div>
                : <Loader />}

                <MainNewsSction />
         </MainContent>
      <Sidebar />
    </Main>
      
      <>
        { newsSubjects.map((subject) => {
        return <CategoryBoxs datas={news}  subject={subject}/>
      })}
      </>
  </div>
 )
}

export default Home;
