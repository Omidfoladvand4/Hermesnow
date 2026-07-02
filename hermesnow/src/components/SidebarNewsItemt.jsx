import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import posterImage from "../assets/HermesNowBannar1.jpg";

const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  border-bottom: 2px solid var(--color-primary);
  opacity: 0.8;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: white;
  font-size: var(--font-size-md);
  margin-bottom: 8px;
`;

const Meta = styled.div`
  color: #9ca3af;
  font-size: var(--font-size-sm);
`;

const Image = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
`;

function NewsListItem({ item, to  , hasImage = true}) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Card>
        <Info>
          <Title>{item.NewsTitle}</Title>
          {item.Journalist && <Meta>{item.Journalist}</Meta>}
        </Info>
        {hasImage && 
         <Image src={item.MainImage || posterImage} />
        }
      </Card>
    </Link>
  );
}

export default NewsListItem;