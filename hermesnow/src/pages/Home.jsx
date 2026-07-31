import React, { useCallback, useState } from "react";
import Header from "../layout/Header";
import CategoryBoxs from "../components/CategoryBoxs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchNewsBox from "../components/SearchNewsBox";
import MainNewsSection from "../components/MainNewsSection";
import { useNews } from "../hooks/useGetNews";
import CloseIcon from "@mui/icons-material/Close";
import { fadeIn } from "../styles/animations";
const HomeContainer = styled.div`
  width: 95%;
  padding: 0;
  @media (max-width : 768px) {
    width: 100%;
  }
`

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
  animation: ${fadeIn} 0.3s ease;
  @media (max-width: 400px) {
    flex-direction: column;
    margin: 6px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }
`;
const MainContent = styled.div`
  max-width: 95%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 13px 20px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;
const MainNews = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 5px;
  overflow: hidden;
   
  &:hover {
    transform: scale(1.02);
  }
`;
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
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
const MainNewsImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const MainNewsTitle = styled.p`
  position: absolute;
  right: 10px;
  bottom: 5px;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
  
`;
const Div = styled.div`
  width: 60%;
  position: relative;
  z-index: 99999;
  @media (max-width : 480px) {
     width: 100%;
  }
`
const SearchNewsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  box-shadow: 10px 0px 12px rgba(0,0,0,0.5);
  background-color: var(--color-accent);
  gap: 10px;
  padding: 10px 16px ;
  @media (max-width: 480px) {
    background-color: var(--color-accent);
    height: calc(max-content + 10px);
    align-items: center;
    padding-top: 50px;
    justify-content: space-between;
    margin-top: 0;
  }
`;
const SearchNewsContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--color-accent);
  color: white;
  padding: 6px 10px ;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 480px) {
    width: 100%;
    height: max-content;
    border-bottom: 1px solid;
  }
`;
const NewsTitle = styled(Link)`
    width: 90%;
    margin-top: 5px;
    color : var(--color-secondary) ;
    font-weight: 900;
    font-size: var(--font-size-lg);
     white-space: nowrap;       
    overflow: hidden;         
    text-overflow: ellipsis;    
    display: block;   
   @media (max-width: 480px) {
       margin: 0;
      padding: 6px;
      text-align: center;
      font-size: var(--font-size-lg);

    }
`
const CloseSearchBoxListBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;
  z-index: 99;
  background-color: var(--color-accent);
  @media (max-width: 480px) {
    color: var(--color-primary);
  }
`;
function Home() {
  const { news } = useNews();
  const [searchedNews, setSearchedNews] = useState([]);
  const [isopenSearchBoxList, setIsopenSearchBoxList] = useState(true);
  const newsSubjects = [...new Set(news.map((item) => item.NewsSubject))];
  const mainNews = [
    ...new Map(news.map((news) => [news.NewsSubject, news])).values(),
  ].slice(-3);

  const filterNews = useCallback((value) => {
       if (!value) {
      setSearchedNews("");
    } else {
      const filredNewsList = news.filter((item) =>
        item.NewsTitle.includes(value),
      );
      setSearchedNews(filredNewsList);
      setIsopenSearchBoxList(true);
    }
}, [news]);

  const toggleSearchBoxList = () => {
    setIsopenSearchBoxList((prev) => !prev);
  };
  return (
    <HomeContainer>
      <Header />
      <Main>
        <MainContent>
          {news.length > 0 ? (
            <>
              <SearchNewsBox filterNewsHandler={filterNews} />
              {searchedNews.length !== 0 && isopenSearchBoxList && (
                <Div>
                  <SearchNewsContent>
                  <CloseSearchBoxListBtn onClick={() => toggleSearchBoxList()}>
                    <CloseIcon
                      sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
                    />
                  </CloseSearchBoxListBtn>
                  {searchedNews &&
                    searchedNews.map((item) => (
                      <SearchNewsContentWrapper key={item.div}>
                        <NewsTitle to={`news/${item.id}`}>{item.NewsTitle}</NewsTitle>
                      </SearchNewsContentWrapper>
                    ))}
                </SearchNewsContent>
                </Div>
              )}
              <MainNewsWrapper>
                {mainNews && mainNews.length > 0
                  ? mainNews.map((item) => {
                      return (
                        <MainNews key={item.id}>
                          <Link to={`/category/${item.NewsSubject}`}>
                            <MainNewsImage src={item.MainImage} />
                            <MainNewsTitle>{item.NewsSubject}</MainNewsTitle>
                          </Link>
                        </MainNews>
                      );
                    })
                  : ""}
              </MainNewsWrapper>
            </>
          ) : (
            ""
          )}
          <MainNewsSection />
        </MainContent>
      </Main>

      <>
        {newsSubjects.map((subject , index) => {
          return <CategoryBoxs datas={news} subject={subject}  key={index}/>;
        })}
      </>
    </HomeContainer>
  );
}

export default Home;
