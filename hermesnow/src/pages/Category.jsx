import  { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useNews } from "../hooks/useGetNews";
import styled from "styled-components";
import CategoryBox from "../components/CategoryBox";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";

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
  display: flex;
  gap: 30px;
  padding: 40px 20px;
  justify-items: center;

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

const EmptyMessage = styled.div`
  color: var(--color-primary);
  font-size: var(--font-size-xxl);
  text-align: center;
  padding: 50px;
  font-weight: 900;
`;
function Category() {
  const subject = useParams().subject;
  const { news, loading } = useNews();

 const filteredNews = useMemo(
  () => news.filter(item => item.NewsSubject === subject),
  [news, subject]
);

  if (loading) return <Loader />;

  return (
    <Container>
      <Header>{subject}</Header>
      {filteredNews.length > 0 ? (
        <CategoryContentWrapper>
          {" "}
          <Sidebar />
          <NewsGrid>
            {filteredNews.map((item) => (
              <CategoryBox key={item.id} news={item} />
            ))}
          </NewsGrid>{" "}
        </CategoryContentWrapper>
      ) : (
        <EmptyMessage>
          هیچ خبری در دسته‌بندی ({subject}) یافت نشد :{" "}
          <Link to="/">رفتن به صفحه اصلی</Link>
        </EmptyMessage>
      )}
    </Container>
  );
}

export default Category;
