import React, { useState } from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import formatNumber from '../utils/formartNumber';
import PersianDate from '../services/PersionDate';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom'; 

const NewsBox = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 350px;
  gap: 5px;
  border-radius: 10px;
  background: var(--color-secondary);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in;
  border-bottom: 10px solid #000000;
  opacity: 0.8;
  cursor: pointer;
  
  &:hover {
    transform: translateY(15px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.03);
    opacity: 1;
  }
`

const NewsContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`

const NewsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DateAndTime = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  color: var(--color-info);
  font-size: 10px;
  margin-top: 5px;
`

const NewsSubject = styled.div`
  font-size: 14px;
  font-weight: 900;
  color: var(--color-accent);
  background: rgba(255,255,255,0.1);
  padding: 2px 10px;
  border-radius: 15px;
`

const NewsTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: larger;
  font-weight: bolder;
  text-align: center;
  color: var(--color-primary);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
`

const FooterCategoryBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 0;
  gap: 5px;
`

const Div = styled.div`
  width: 50px;
  height: 15px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color-info);
  color: #ffffff;
`

const I = styled.i`
  width: 70px;
  height: 15px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  cursor: pointer;
  font-style: normal;
  background: rgba(255,255,255,0.1);
  border-radius: 5px;
`

function CategoryBox({ news }) {
  const navigate = useNavigate();
  const [views, setViews] = useState(news?.NewsLikes || news?.News_view || 0);
  const [loading, setLoading] = useState(false);

  if (!news) return null;

  const handleClick = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('News')
        .update({ 
          News_view: (news.News_view || 0) + 1 
        })
        .eq('id', news.id);

      if (error) throw error;

      setViews(prev => prev + 1);
      
      navigate(`/news/${news.id}`);
      
    } catch (error) {
      console.error('خطا در افزایش بازدید:', error);
      navigate(`/news/${news.id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsBox onClick={handleClick} style={{ opacity: loading ? 0.7 : 0.8 }}>
      <ImageBox 
        $src={news.MainImage || './images/HermesNowBannar.jpg'} 
        $w='45%' 
        $h='150px'
      />
      
      <NewsContentWrapper>   
        <NewsTitle>{news.NewsTitle}</NewsTitle>
        
        <NewsContent>
          <NewsSubject>{news.NewsSubject}</NewsSubject>
        </NewsContent>
        
        <FooterCategoryBox>
          <Div>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <RemoveRedEyeIcon fontSize='smaller' /> 
              <span style={{ marginRight: '2px' }}>{formatNumber(views)}</span>
            </div>
          </Div>
          
          <Div>{news.Country || 'ایران'}</Div>
          
          <I>{news.Journalist || 'خبرنگار'}</I>
        </FooterCategoryBox>
        
        <DateAndTime>{PersianDate(news)}</DateAndTime>
      </NewsContentWrapper>
    </NewsBox>
  )
}

export default CategoryBox