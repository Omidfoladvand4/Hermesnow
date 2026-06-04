import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Sidebar from '../components/Sidebar'
import { supabase } from "../lib/supabaseClient";
import CategoryBoxs from "../components/CategoryBoxs";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMenu from "../ui/menu/UserMenu";
import SearchNewsBox from "../components/SearchNewsBox";
import MainNewsSction from "../components/MainNewsSction";
const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
  @media (max-width : 400px) {
     flex-direction: column;
     align-items: center;
     margin: 20px 0;
  }
  `
const MainContent = styled.div`
  max-width: 70%;
  flex-grow : 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 13px 20px;
    @media (max-width : 400px) {
     max-width: 100%;
     margin: 0 auto;
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
align-items: center;
justify-content: center;
gap: 5px;
margin-top: 15px;
padding: 20px 0;
overflow: hidden;
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
function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newsDataSubjects =  newsData.reduce((acc , item)=> {
    if(!acc.includes(item.NewsSubject)) {
      acc.push(item.NewsSubject)
    }
    console.log(acc);
    return acc
  } , [])
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase.from("News").select("*");

      if (error) throw error;
      setNewsData(data || []);
    } catch (error) {
      console.error("خطا در دریافت اخبار:", error);
      setError("خطا در دریافت اخبار");
    } finally {
      setLoading(false);
    }
  };
  const mainNews = newsData.slice(-3) 
  const getUniqueSubjects = () => {
    const subjects = [...new Set(newsData.map((news) => news.NewsSubject))];
    console.log("موضوعات یکتا:", subjects);
    return subjects;
  };
 return (
  <div>
    <Header />
    <Main>
         <MainContent > 
               {newsData.length !== 0  ?
                  <div>
                    <SearchNewsBox />
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
        { newsDataSubjects.map((subject) => {
        return <CategoryBoxs datas={newsData}  subject={subject}/>
      })}
      </>
  </div>
 )
}

export default Home;
