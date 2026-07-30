import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNews } from "../hooks/useGetNews";
import Loader from "../components/Loader";
import Title from "../components/Title";
import { useAuth } from "../contexts/AuthContext";
import CategoryBox from "../components/CategoryBox";
import Pagination from '../components/Pagination';

const TopNewsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 150px;
`;

const FilterBox = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const FilterTabs = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px 20px;
  background: var(--color-info);
  font-weight: 900;
  font-size: var(--font-size-xl);
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;

  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--font-size-md);
  }
`;

const Span = styled.span`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  @media (max-width: 768px) {
    display: none;
  }
`;

const FilterTab = styled.div`
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  padding: 4px 16px;
  border-radius: 8px;
  background: ${(props) =>
    props.$active ? "var(--color-primary)" : "transparent"};
  color: ${(props) =>
    props.$active ? "var(--color-secondary)" : "var(--color-secondary)"};
  font-weight: ${(props) => (props.$active ? "900" : "700")};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`;

const FilterdNewsBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;
  gap: 1rem;
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
    margin-bottom: 150px;
  }
`;

function Topnews() {
  const { news, Newsrefetch, getNewsLoading } = useNews();
  const { user } = useAuth();
  const [currentNews, setCurrentNews] = useState([]);
  const [ActiveTab, setActiveTab] = useState('all');
  const [resetPage, setResetPage] = useState(false); 

  useEffect(() => {
    setCurrentNews(news || []);
  }, [news]);

  const FilterHandle = (param = "all") => {
    if (!news || news.length === 0) return;
    
    setActiveTab(param);
    
    setResetPage(prev => !prev); // toggle کردن برای trigger useEffect در Pagination

    switch (param) {
      case "all":
        setCurrentNews(news);
        break;
      case "user-fav": {
        const favTopic = user?.FavoritesTopic;
        if (!favTopic) {
          setCurrentNews(news);
        } else {
          setCurrentNews(
            news.filter((item) => item.NewsSubject === favTopic)
          );
        }
        break;
      }
      case "old-to-new":
        setCurrentNews(
          [...news].sort((a, b) => new Date(a.NewsDate) - new Date(b.NewsDate))
        );
        break;
      case "new-to-old":
        setCurrentNews(
          [...news].sort((a, b) => new Date(b.NewsDate) - new Date(a.NewsDate))
        );
        break;
      default:
        setCurrentNews(news);
    }
  };

  return (
    <TopNewsWrapper>
      <FilterBox>
        <FilterTabs>
          <Span>فیلتر کردن بر اساس :</Span>
          <FilterTab $active={ActiveTab === 'all'} onClick={() => FilterHandle("all")}>
            همه
          </FilterTab>
          <FilterTab $active={ActiveTab === 'user-fav'} onClick={() => FilterHandle("user-fav")}>
            علاقه‌مندی
          </FilterTab>
          <FilterTab $active={ActiveTab === 'old-to-new'} onClick={() => FilterHandle("old-to-new")}>
            قدیم به جدید
          </FilterTab>
          <FilterTab $active={ActiveTab === 'new-to-old'} onClick={() => FilterHandle("new-to-old")}>
            جدید به قدیم
          </FilterTab>
        </FilterTabs>
        <FilterdNewsBox>
          <Pagination 
            newsList={currentNews} 
            getNewsLoading={getNewsLoading} 
            resetPage={resetPage}
          />
        </FilterdNewsBox>
      </FilterBox>
    </TopNewsWrapper>
  );
}

export default Topnews;