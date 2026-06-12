import { React, useState, useEffect } from "react";
import { useNews } from "../hooks/useGetNews";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import Title from "../components/Title";
import CategoryBox from "../components/CategoryBox";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import { gradientMove } from "../styles/animations";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
const MyNewsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
const MyNewsBoxs = styled.div`
  width: 100%;
  padding: 2% 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  @media (max-width: 768px) {
      display: flex;
      gap: 0;
      margin-top: 70px;
  }
`;
const GuestBox = styled.div`
  width: 100vw;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 400%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  justify-content: center;
  font-size: var(--font-size-md);
  animation: ${gradientMove} 0.8s infinite alternate;
  z-index: 9999;
`;
const YourNewsNavigationBox = styled.div`
  width: 100%;
  background: var(--color-accent);
  color: var(--color-info);
  font-size: var(--font-size-xl);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding:  0.5rem;
  margin-bottom: 100px;
  position: absolute;
  top: -20px;
  left: 0;
    @media (max-width: 768px) {
      top: 0;
  }
  
`;
const LinkItem = styled(Link)`
  color: var(--color-primary);
`;
function Mynews() {
  const [yourNews, setYourNews] = useState([]);
  const { news, Newsrefetch, getNewsLoading } = useNews();
  const { user } = useAuth();

  useEffect(() => {
    if (news) {
      setYourNews(
        news.filter((item) => item.NewsSubject == user?.FavoritesTopic),
      );
    }
  }, [news]);

  return (
    <MyNewsWrapper>
      {user?.FavoritesTopic ? (
        <>
          {" "}
          <MyNewsBoxs>
            {!getNewsLoading && yourNews.length >= 0 ? (
              yourNews.map((item) => {
                return <CategoryBox key={item.id} news={item} />;
              })
            ) : (
              <Loader />
            )}
              <YourNewsNavigationBox>
            شما میتوانید برای تغییر علاقه مندی خود به تنظیمات رفته{" "}
            <LinkItem to={"/settings"}>
              <SettingsInputCompositeIcon
                sx={{ fontSize: { xs: 40, sm: 36, md: 32, lg: 28 } }}
              />{" "}
            </LinkItem>
          </YourNewsNavigationBox>
          </MyNewsBoxs>
        </>
      ) : (
        <GuestBox>
          <Link to={"/login"}>
            برای استفاده از بخش ابتدا باید وارد شوید یا علاقه مندی خود را
            درتنظیمات درج کنید
          </Link>
          <BackButton />
        </GuestBox>
      )}
    </MyNewsWrapper>
  );
}

export default Mynews;
