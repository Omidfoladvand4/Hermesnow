import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Sidebar from '../components/Sidebar'
import { supabase } from "../lib/supabaseClient";
import CategoryBoxs from "../components/CategoryBoxs";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMenu from "../ui/menu/ButtonMenu";
import SearchNewsBox from "../components/SearchNewsBox";
const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`
const MainContent = styled.div`
  background-color: var(--color-info);
  flex-grow : 1;
  max-width: 70%;
  padding: 0 20px;
`
const MainNews = styled.div`
    width: 30% ;
    text-align: center;
    position: relative;
    `
const MainNewsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 15px;
padding: 20px 0;
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
      <ButtonMenu />
         <MainContent > 
               {newsData && newsData.length !== 0 ?
                  <div>
                    <SearchNewsBox />
                   <MainNewsWrapper>
                    {mainNews && mainNews.length !== 0 ?
                       mainNews.map((item) => {
                      return   <MainNews >
                        <MainNewsImage src= {item.MainImage} />
                         <MainNewsTitle>{item.NewsSubject}</MainNewsTitle>
                    </MainNews>
                       })
                       :
                       ""
                    }
                   </MainNewsWrapper>
                    
                  </div>
                : <Loader />}
         </MainContent>
      <Sidebar />
    </Main>
  </div>
 )
}

export default Home;
