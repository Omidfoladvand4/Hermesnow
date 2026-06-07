import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNews } from '../hooks/useGetNews';
import styled from 'styled-components';
import CategoryBox from '../components/CategoryBox';
import Title from '../components/Title';
import Loader from '../components/Loader';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-primary);
  text-align: center;
`;

const NewsGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  justify-items: center;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const EmptyMessage = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-xxl);
  text-align: center;
  padding: 50px;
  font-weight: 900;
`;

function Category() {
  const subject = useParams().subject;
  const [headerTitle , setHeaderTitle] = useState(subject)
  const { news, loading } = useNews();
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    if (news && news.length > 0) {
      const filtered = news.filter(item => item.NewsSubject === subject);
      setFilteredNews(filtered);
      setHeaderTitle(subject)
    }
  }, [subject, news]);


  if (loading) return <Loader />;

  return (
    <Container>
      <Header>
        <Title titleName={headerTitle} />
      </Header>
      
      {filteredNews.length > 0 ? (
        <NewsGrid>
          {filteredNews.map(item => (
            <CategoryBox key={item.id} news={item} />
          ))}
        </NewsGrid>
      ) : (
        <EmptyMessage>
          هیچ خبری در دسته‌بندی ({headerTitle}) یافت نشد  :    <Link to= '/'>رفتن به صفحه اصلی</Link>
        </EmptyMessage>
      )}
    </Container>
  );
}

export default Category;