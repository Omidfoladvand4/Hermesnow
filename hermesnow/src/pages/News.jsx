import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import PersianDate from "../services/PersionDate";
import Title from "../components/Title";
import { usegetRecomendedNews } from "../hooks/useGetRecomendedNews";
import { useShare } from "../hooks/useShareNews";
import CategoryBox from "../components/CategoryBox";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import { slideInStagger, zoomIn } from "../styles/animations";
import posterImage from "../assets/HermesNowBannar1.jpg";
import Sidebar from "../components/Sidebar";

const NewsHeader = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-accent);
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    height: 70vh;
  }
`;

const NewsSummary = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  overflow-wrap: break-word;
  color: var(--color-info);
  padding: 0 16px;
  font-weight: 900;
  font-size: var(--font-size-xl);
  animation: ${slideInStagger} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const NewsMainText = styled.div`
  width: 100%;
  font-size: var(--font-size-xl);
  margin-right: 3%;
`;
const NewsImage = styled.img`
  flex-grow: 1;
  height: 100%;
  object-fit: cover;
  animation: ${zoomIn} 0.5s linear;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Journalist = styled.div`
  font-size: var(--font-size-md);
  font-weight: 900;
  color: var(--color-info);
  padding: 25px;
`;

const MainContent = styled.div`
  width: 100%;
  padding: 12px 20px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`;
const MainContentNews = styled.div`
  width: 70%;
  padding: 12px 20px;
  background-color: var(--color-accent);
  border-bottom: 6px solid var(--color-accent);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const MainContentNewsTitle = styled.h1`
  margin-top: 10px;
  line-height: 1.7;
  color: white;
  font-size: var(--font-size-xxl);
`;
const MainContentNewsText = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: 32px;
  font-size: var(--font-size-xl);
  line-height: 2;
  font-weight: 900;
  color: var(--color-secondary);
  @media (max-width: 768px) {
    text-align: start;
  }
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px 12px;
  font-size: var(--font-size-md);
  @media (max-width: 768px) {
    padding: 2px;
    justify-content: center;
    margin: 15px auto;
  }
`;
const InformationDate = styled.div`
  font-weight: 900;
  font-size: var(--font-size-md);
  color: var(--color-info);
`;
const InformationLink = styled(Link)`
  font-size: var(--font-size-md);
  color: var(--color-info);
  font-weight: 900;
`;
const ShareBotton = styled.button`
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 900;
  font-size: var(--font-size-md);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.98);
  }
`;
const RecomededNews = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const RecomendedNewsContanier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1%;
  gap: 10px;
`;

function News() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const { shareNews, copyToClipboard, isShareble } = useShare();

  const navigation = useNavigate();
  const { id } = useParams();
  const { getRecomendedNews, getRecomendedNewsLoading } = usegetRecomendedNews(
    news?.NewsSubject,
  );

  useEffect(() => {
    if (id) {
      fetchNewsById();
    }
  }, [id]);

const fetchNewsById = useCallback(async () => {
 try {
      setLoading(true);

      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        navigation("/");
        if (error.code === "PGRST116") {
          setNews(null);
          return;
        }
        throw error;
      }

      setNews(data);
    
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
}, [id, navigation]);
   

const handleShare = useCallback(() => {
  if (!isShareble) {
    copyToClipboard(window.location.href);
  }

  shareNews(news, window.location.href);
}, [copyToClipboard, isShareble, news, shareNews]);
const handleCommentAdded = useCallback((newComment) => {
  setComments((prev) => [newComment, ...prev]);
}, []);
const recomendedNewsFiltered = useMemo(() => {
  if (!news) return [];

  return getRecomendedNews
    .filter((item) => item.id !== news.id)
    .slice(0, 3);
}, [getRecomendedNews, news]);

  if (loading) return <Loader />;
  if (error) return <div>خطا: {error}</div>;
  if (!news) return <div>خبری با شناسه {id} یافت نشد</div>;
  return (
    <>
      <NewsHeader>
        <NewsSummary>
          <Title
            titleName={news.NewsTitle}
            font='var(--font-size-xxl)'
            color='white'
          />
          <NewsMainText>{news.NewsMainText}</NewsMainText>
          <Information>
            <InformationLink to={`/category/${news.NewsSubject}`}>
              {news.NewsSubject}
            </InformationLink>
            <Journalist> {news.Journalist}</Journalist>
            <ShareBotton onClick={handleShare}> به اشتراک گذاشتن </ShareBotton>
            <InformationDate>{PersianDate(news)}</InformationDate>
          </Information>
        </NewsSummary>
        <NewsImage
          src={news.MainImage || posterImage}
          alt={news.NewsSubject}
        />
      </NewsHeader>

      <MainContent>
        <MainContentNews>
          {news.Content &&
            news.Content.map((item, index) =>
              item.element === "h1" ? (
                <MainContentNewsTitle key={index}>
                  {item.content}
                </MainContentNewsTitle>
              ) : (
                <MainContentNewsText key={index}>
                  {item.content}
                </MainContentNewsText>
              ),
            )}
        </MainContentNews>
        <Sidebar />
      </MainContent>

      {getRecomendedNewsLoading ? (
        <Loader />
      ) : (
        <RecomededNews>
          <RecomendedNewsContanier>
            {recomendedNewsFiltered.map((item) => (
              <CategoryBox key={item.id} news={item} />
            ))}
          </RecomendedNewsContanier>
        </RecomededNews>
      )}
      <Comments
        commentsData={comments}
        newsId={id}
        onCommentAdded={handleCommentAdded}
      />
    </>
  );
}

export default News;
