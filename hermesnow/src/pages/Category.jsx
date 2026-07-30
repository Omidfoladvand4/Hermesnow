import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useNews } from "../hooks/useGetNews";
import styled from "styled-components";
import CategoryBox from "../components/CategoryBox";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-primary);
  text-align: center;
  font-size: var(--font-size-xxl);
  font-weight: 900;
`;

const CategoryContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding: 10px 30px;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    gap: 0;
  }
`;

const NewsGrid = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

function Category() {
  const { subject } = useParams();
  const { news, loading } = useNews();

  const filteredNews = useMemo(() => {
    if (!news) return [];
    return news.filter((item) => item.NewsSubject === subject);
  }, [news, subject]);


  if (loading || !news || news.length === 0) {
    return (
      <Container>
        <Header>{subject}</Header>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <Header>{subject}</Header>
      <CategoryContentWrapper>
        <Sidebar />
        <NewsGrid>
          <Pagination
            newsList={filteredNews}
            getNewsLoading={loading}
            itemsPage={4}
          />
        </NewsGrid>
      </CategoryContentWrapper>
    </Container>
  );
}

export default Category;