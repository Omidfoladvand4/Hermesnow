import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../components/Sidebar";
import CategoryBoxs from "../components/CategoryBoxs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMenu from "../ui/menu/UserMenu";
import SearchNewsBox from "../components/SearchNewsBox";
import MainNewsSction from "../components/MainNewsSction";
import { useNews } from "../hooks/useGetNews";
import CloseIcon from "@mui/icons-material/Close";
import { fadeIn } from "../styles/animations";
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
  max-width: 70%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
const SearchNewsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  background-color: var(--color-primary);
  gap: 10px;
  @media (max-width: 480px) {
    background-color: var(--color-accent);
    height: 30vh;
    margin-top: 10px;
  }
`;
const SearchNewsContentWrapper = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--color-accent);
  color: white;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
  p {
    margin-top: 5px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: max-content;
    border-bottom: 1px solid;
    img {
      display: none;
    }
    p {
      margin: 0;
      padding: 6px;
      text-align: center;
    }
  }
`;
const CloseSearchBoxListBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  cursor: pointer;
  z-index: 99;
  background-color: var(--color-accent);
  @media (max-width: 480px) {
    color: var(--color-primary);
    background-color: white;
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

  const FiltredNews = (value) => {
    if (!value) {
      setSearchedNews("");
    } else {
      const filredNewsList = news.filter((item) =>
        item.NewsTitle.includes(value),
      );
      setSearchedNews(filredNewsList);
      setIsopenSearchBoxList(true);
    }
  };
  const CloseSearchBoxList = () => {
    setIsopenSearchBoxList((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <Main>
        <MainContent>
          {news.length !== 0 ? (
            <div>
              <SearchNewsBox filterNewsHandler={FiltredNews} />
              {searchedNews.length !== 0 && isopenSearchBoxList && (
                <SearchNewsContent>
                  <CloseSearchBoxListBtn onClick={() => CloseSearchBoxList()}>
                    <CloseIcon
                      sx={{ fontSize: { xs: 44, sm: 40, md: 36, lg: 32 } }}
                    />
                  </CloseSearchBoxListBtn>
                  {searchedNews &&
                    searchedNews.map((item) => (
                      <SearchNewsContentWrapper>
                        <img
                          src={item.MainImage}
                          alt=""
                          style={{ width: "250px" }}
                        />
                        <p>{item.NewsTitle}</p>
                      </SearchNewsContentWrapper>
                    ))}
                </SearchNewsContent>
              )}
              <MainNewsWrapper>
                {mainNews && mainNews.length !== 0
                  ? mainNews.map((item) => {
                      return (
                        <MainNews>
                          <Link to={`/category/${item.NewsSubject}`}>
                            <MainNewsImage src={item.MainImage} />
                            <MainNewsTitle>{item.NewsSubject}</MainNewsTitle>
                          </Link>
                        </MainNews>
                      );
                    })
                  : ""}
              </MainNewsWrapper>
            </div>
          ) : (
            ""
          )}

          <MainNewsSction />
        </MainContent>
        <Sidebar />
      </Main>

      <>
        {newsSubjects.map((subject) => {
          return <CategoryBoxs datas={news} subject={subject} />;
        })}
      </>
    </div>
  );
}

export default Home;
