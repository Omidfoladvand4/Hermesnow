import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageBox from '../components/ImageBox';
import PersianDate from '../services/PersionDate';

function News() {
  // برای Primary Key بهتره از null استفاده کنیم نه آرایه
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchNewsById();
    }
  }, [id]);

  const fetchNewsById = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('News')
        .select('*')
        .eq('id', id)
        .single();  // این مهمه! چون Primary Key یکتا هست

      if (error) {
        navigation('/')
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

  // حالا news یک آبجکت هست، نه آرایه
  return (
    <div>
      <h1>{news.NewsTitle}</h1>
      <p>{news.content}</p>
      <p>{news.Journalist}</p>
      <ImageBox $src={news.MainImage} $h={350}/>
      <p>{PersianDate(news)}</p>
      <br />
      <p>{news.Country}</p>
     <p>{news.NewsMainText}</p>
     <p>{news.NewsSubject}</p>
     <br />
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
     
      {/* بقیه اطلاعات */}
    </div>
  );
}

export default News;