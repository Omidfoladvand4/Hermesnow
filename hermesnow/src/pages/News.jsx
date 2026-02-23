import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersianDate from '../services/PersionDate';
import Title from '../components/Title';
import { usegetRecomendedNews } from '../hooks/useGetRecomendedNews';
import CategoryBox from '../components/CategoryBox';
import Loader from '../components/Loader';

const NewsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-top: 3%;
`;

const NewsSummary = styled.div`
  width: 40%;
  padding: 3% 5%;
  font-size: 25px;
  color: var(--color-info);
`;

const NewsImage = styled.img`
  width: 50%;
  object-fit: cover;
`;

const Journalist = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: var(--color-info);
  padding: 25px;
`;

const MainContent = styled.div`
  width: 100%;
  background-color: var(--color-info);
  padding: 3% 8%;
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
  color: #ffffff;
  background-color: var(--color-primary);
`;
const RecomededNews = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
`
const RecomendedNewsContanier  = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
background-color: var(--color-accent);
flex-wrap: wrap;
padding: 5%;
`

function News() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const { id } = useParams();
    const { getRecomendedNews, getRecomendedNewsLoading } = 
    usegetRecomendedNews(news?.NewsSubject);

  useEffect(() => {
    if (id) {
      fetchNewsById();
    }
  }, [id]);

  useEffect(() => {
    if (news) {
      console.log('موضوع خبر:', news.NewsSubject);
      console.log('اخبار مرتبط:', getRecomendedNews);
    }
  }, [news, getRecomendedNews]);

  const fetchNewsById = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('News')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        navigation('/');
        if (error.code === 'PGRST116') {
          setNews(null);
          return;
        }
        throw error;
      }
      
      setNews(data);
      console.log('خبر پیدا شد:', data);
      
    } catch (err) {
      setError(err.message);
      console.error('خطا:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;
  if (!news) return <div>خبری با شناسه {id} یافت نشد</div>;

  return (
    <div>
      <Title titleName={news.NewsTitle} />
      
      <NewsHeader>
        <NewsImage src={news.MainImage} alt={news.NewsSubject} />
        <NewsSummary>{news.NewsMainText}</NewsSummary>
      </NewsHeader>
      
      <br />
      <br />
      
      <MainContent>
        {news.Content && news.Content.map((item, index) => (
          item.element === 'h1' ? (
            <h1 key={index} style={{ color: item.color }}>
              {item.content}
            </h1>
          ) : (
            <p key={index} style={{ color: item.color }}>
              {item.content}
            </p>
          )
        ))}
      </MainContent>
      

      <Information>
        <Journalist> نوشته شده توسط: {news.Journalist}</Journalist>
        در
        <div>{PersianDate(news)}</div>
        <p>{news.Country}</p>
        <br />
        <p>{news.NewsSubject}</p>
      </Information>
    {getRecomendedNewsLoading ?  <Loader /> :  (
      <RecomededNews> 
    <Title titleName={'خبر های بیشتر در این مورد '} />
    <RecomendedNewsContanier>
       {getRecomendedNews
      .filter(item => item.id !== news.id)
      .map(item => (
        <CategoryBox key={item.id} news={item} />
      ))
    }
    </RecomendedNewsContanier>
   </RecomededNews>
)}
    </div>
  );
}

export default News;