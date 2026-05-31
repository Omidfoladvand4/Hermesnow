import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersianDate from '../services/PersionDate';
import Title from '../components/Title';
import { usegetRecomendedNews } from '../hooks/useGetRecomendedNews';
import { useShare } from '../hooks/useShareNews';
import CategoryBox from '../components/CategoryBox';
import Loader from '../components/Loader';
import Comments from '../components/Comments';
import {slideInStagger ,zoomIn} from '../styles/animations'
import posterImage from '../assets/HermesNowBannar1.jpg'



const NewsHeader = styled.div`
  width: 100vw;
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-top: 3%;
  @media (max-width : 400px){
    align-items: center;
    flex-direction: column;

  }
`;

const NewsSummary = styled.div`
  width: 40%;
  padding: 3% 5%;
  font-size: var(--font-size-xl);
  overflow-wrap: break-word;
  color: var(--color-info);
  animation:  ${slideInStagger} .5s linear;
  @media (max-width : 400px) {
    width: 100%;
  }
`;

const NewsImage = styled.img`
  width: 50%;
  object-fit: cover;
  animation:  ${zoomIn} 0.5s linear;
    @media (max-width : 400px){
    width: 100%;
  }
`;

const Journalist = styled.div`
  font-size:  var(--font-size-md);
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  color: #ffffff;
  background-color: var(--color-primary);
  @media (max-width : 400px) {
    padding: 20px;
      justify-content: space-evenly;

  }
`;
const ShareBotton = styled.button`
  padding: 10px 5px;
  cursor: pointer;
   box-shadow: 10px 10px 6px var(--color-info);
    border-radius: 5px;
    font-weight: 900;
    font-size: var(--font-size-md);
    transition: all 0.3s ease;
    &:hover {
        transform: scale(.98);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

    }


`
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
  const [comments, setComments] = useState([])
  const { shareNews, copyToClipboard, isShareble  } = useShare();

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

  const handleShare = () => {
    if(!isShareble) {
      copyToClipboard(window.location.href)
    }
     shareNews(news , window.location.href)
    
     

    
    
    
  }
  const handleCommentAdded = (newComment) => {
        setComments(prev => [newComment, ...prev])
    }
    const recomendedNewsFiltered = getRecomendedNews
    .filter(item => item.id !== news.id)
    .slice(0, 3);
  return (
    <div>
      <Title titleName={news.NewsTitle} font={`var(--font-size-md)`} />
      
      <NewsHeader>
        <NewsSummary>{news.NewsMainText}</NewsSummary>
        <NewsImage src={news.MainImage ||  `${posterImage}`} alt={news.NewsSubject} />
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
        <ShareBotton onClick={handleShare}> 📢 </ShareBotton>
      </Information>
    {getRecomendedNewsLoading ?  <Loader /> :  (
      <RecomededNews> 
    <Title titleName={'خبر های بیشتر در این مورد '} font={`var(--font-size-md)`}/>
    <RecomendedNewsContanier>
       {recomendedNewsFiltered
      .map(item => (
        <CategoryBox key={item.id} news={item} />
      ))
    }
    </RecomendedNewsContanier>
   </RecomededNews>
)}
  <Comments  commentsData={comments} newsId={id} onCommentAdded={handleCommentAdded}/>
    </div>
  );
}

export default News;