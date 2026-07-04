import { React, useMemo } from "react";
import { useNews } from "../hooks/useGetNews";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import CategoryBox from "../components/CategoryBox";
import Loader from "../components/Loader";
import GoBackButton from "../components/GoBackButton";
import Title from "../components/Title";
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
  gap: 10px;
  margin-top: 15px;
  
  @media (max-width: 768px) {
      display: flex;
      gap: 6px;
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
const LinkItem = styled(Link)`
  color: var(--color-primary);
`;
function Mynews() {
  const { news, getNewsLoading } = useNews();
  const { user } = useAuth();
  const yourNews = useMemo(() => {
  if (!user?.FavoritesTopic) return [];

  return news.filter(
    (item) => item.NewsSubject === user.FavoritesTopic
  );
}, [news, user?.FavoritesTopic]);
   
if (!user?.FavoritesTopic) {
  return (
    <MyNewsWrapper>
      <GuestBox>
        <Link to="/login">
          برای استفاده از این بخش ابتدا باید وارد شوید یا علاقه‌مندی خود را در
          تنظیمات ثبت کنید.
        </Link>

        <GoBackButton />
      </GuestBox>
    </MyNewsWrapper>
  );
}

if (getNewsLoading) {
  return <Loader />;
}
return (
  <MyNewsWrapper>
    <Title titleName='خبر های شما '/>
    <MyNewsBoxs>
      {yourNews.map((item) => (
        <CategoryBox
          key={item.id}
          news={item}
        />
      ))}

    </MyNewsBoxs>
  </MyNewsWrapper>
);}

export default Mynews;
