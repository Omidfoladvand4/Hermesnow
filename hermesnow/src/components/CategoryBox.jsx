import React, { useState } from 'react'
import styled from 'styled-components'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import formatNumber from '../utils/formartNumber';
import PersianDate from '../services/PersionDate';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom'; 
import { shake } from '../styles/animations'
import posterImage from '../assets/HermesNowBannar1.jpg'

const NewsBox = styled.div`
  width: 500px;
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-accent);
  opacity: 0.8;
  cursor: pointer;
  
  &:hover {
  animation: ${shake} 0.3s linear;
  }
    @media (max-width: 400px) {
     width: 100vw;
     height: 20vh;
     padding: 10px 5px;
  }
`
const NewsImage = styled.img`
  width: 30%;
  height: 100%;
`

const NewsContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
   @media (max-width : 400px) {
    padding: 2px;
    width: 100%;
  }
`

const NewsTitle = styled.div`
  width: 100%;
  font-size: var(--font-size-md);
  font-weight: 900;
  text-align: start;
  color: white;                                                                                                            
  margin: 6px 10px;
`

const FooterCategoryBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 10px 15px;
`

const Div = styled.div`
  height: 15px;
  display: flex;
  font-size: var(--font-size-base);
  align-items: center;
  justify-content: center;
  color: var(--color-info);

`

const I = styled.div`
  height: 15px;
  display: flex;
  font-size: var(--font-size-base);
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: var(--color-info);
  cursor: pointer;

`
const DateAndTime = styled.div`
  width: 100%;
  text-align: end;
  padding: 5px 15px;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: 600;

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
    <NewsBox onClick={handleClick}>
      <NewsImage 
        src={news.MainImage || `${posterImage}`} 
      />
      
      <NewsContentWrapper>   
        <NewsTitle>{news.NewsTitle}</NewsTitle>
        
        
        <FooterCategoryBox>
          <Div>
            <div style={{ display: 'flex', alignItems: "center"  , margin : '0 15px'}}>
              <div style={{ marginRight: '5px' }}>{formatNumber(views)}</div>
              <RemoveRedEyeIcon fontSize='smaller' /> 
            </div>
          </Div>
          
          
          <I>{news.Journalist || 'خبرنگار'}</I>
        </FooterCategoryBox>
        
        <DateAndTime>{PersianDate(news)}</DateAndTime>
      </NewsContentWrapper>
    </NewsBox>
  )
}

export default CategoryBox