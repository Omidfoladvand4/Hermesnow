import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { incrementNewsView } from "../services/newsService";
import styled from "styled-components";
import { shake } from "../styles/animations";
import posterImage from "../assets/HermesNowBannar1.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import formatNumber from "../utils/formartNumber";
import PersianDate from "../services/PersionDate";
import {toPersianNumbers} from '../services/persionNumber'

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
  @media (max-width: 768px) {
    width: 100vw;
    height: 13vh;
    padding: 10px 5px;
  }
  @media (max-width: 400px) {
    padding: 10px 5px;
  }
`;
const NewsImage = styled.img`
  width: 30%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const NewsContentWrapper = styled.div`
  display: flex;
  width: 70%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 2px;
  }
`;

const NewsTitle = styled.h3`
  width: 90%;
  font-size: var(--font-size-md);
  font-weight: 900;
  text-align: start;
  color: white;
  white-space: nowrap;       
    overflow: hidden;         
    text-overflow: ellipsis;             
  margin: 6px 10px;
`;

const FooterCategoryBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 10px 15px;
`;
const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  gap: 5px;
  color: var(--color-secondary);
`;

const ViewsCount = styled.div`
  margin-right: 5px;
`;

const ViewsWrapper = styled.div`
  height: 15px;
  display: flex;
  font-size: var(--font-size-base);
  align-items: center;
  justify-content: center;
  color: var(--color-info);
`;

const JournalistName = styled.div`
  height: 15px;
  display: flex;
  font-size: var(--font-size-base);
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: var(--color-info);
  cursor: pointer;
`;
const DateAndTime = styled.div`
  width: 100%;
  text-align: end;
  padding: 5px 15px;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

function CategoryBox({ news }) {
  const navigate = useNavigate();
  const [views, setViews] = useState(news?.NewsLikes || news?.News_view || 0);
  const [loading, setLoading] = useState(false);

  if (!news) return null;

  const handleClick = async () => {
    if (loading) return;
    try {
      setLoading(true);
      await incrementNewsView(news.id, news.News_view || 0);

      setViews((prev) => prev + 1);

      navigate(`/news/${news.id}`);
    } catch (error) {
      console.error("خطا در افزایش بازدید:", error);
      navigate(`/news/${news.id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsBox onClick={handleClick}>
      <NewsImage src={news.MainImage || posterImage} alt={news.NewsTitle} />

      <NewsContentWrapper>
        <NewsTitle>{news.NewsTitle}</NewsTitle>

        <FooterCategoryBox>
          <ViewsWrapper>
            <ViewsContainer>
              <ViewsCount>{toPersianNumbers(formatNumber(views))}</ViewsCount>

              <RemoveRedEyeIcon fontSize="small" />
            </ViewsContainer>
          </ViewsWrapper>

          <JournalistName>{news.Journalist || "خبرنگار"}</JournalistName>
        </FooterCategoryBox>

        <DateAndTime>{PersianDate(news)}</DateAndTime>
      </NewsContentWrapper>
    </NewsBox>
  );
}

export default React.memo(CategoryBox);
