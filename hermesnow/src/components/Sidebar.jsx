import React from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { useNews } from "../hooks/useGetNews";
import SidebarNewsItem from "./SidebarNewsItemt";
import SidebarSection from "./SidebarSection";
import Loader from "./Loader";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { fadeIn } from "../styles/animations";

const SidebarWrapper = styled.div`
  width: 30%;
  overflow-y: scroll;
  height: 100vh;
  background-color: var(--color-accent);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeIn} 0.5s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  @media (max-width: 900px) {
    width: 100vw;
  }
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: var(--font-size-xl);
`;

const WelcomeMessage = styled.div`
  text-align: center;
  color: white;
`;

const RegisterCard = styled.div`
  width: 100%;
  padding: 10px 15px;
  border-radius: 12px;
  background: var(--color-accent);
`;

const RegisterTitle = styled.h2`
  color: var(--color-primary);
`;

const RegisterSubtitle = styled.h4`
  color: var(--color-secondary);
`;

const RegisterLink = styled.a`
  display: block;
  margin: 10px 0;
  padding: 8px;
  text-align: center;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  text-decoration: none;
`;

const RegisterTerms = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-info);
`;

function Sidebar() {
  const { user } = useAuth();
  const { news } = useNews();

  const hasNews = Array.isArray(news) && news.length > 0;

  return (
    <SidebarWrapper>
      <UserSection>
        {user ? (
          <WelcomeMessage>سلام {user.UserName} خوش آمدی</WelcomeMessage>
        ) : (
          <RegisterCard>
            <RegisterTitle>عضوی از وبسایت ما باشید</RegisterTitle>
            <RegisterSubtitle>
              اگر هنوز ثبت نام نکردید همین حالا ثبت نام کنید
            </RegisterSubtitle>

            <RegisterLink href="/signup">ورود</RegisterLink>

            <RegisterTerms>
              ورود یا ثبت نام شما به منزله‌ی موافقت با قوانین ماست.
            </RegisterTerms>
          </RegisterCard>
        )}
      </UserSection>

      <SidebarSection
        title="یادداشت"
        icon={<NoteAddIcon style={{ color: "white" }} />}
      />

      {hasNews ? (
        news.map((item) => (
          <SidebarNewsItem
            key={item.id}
            item={item}
            to={`/news/${item.id}`}
          />
        ))
      ) : (
        <Loader />
      )}

      <SidebarSection
        title="برگزیده‌ها"
        icon={<AppRegistrationIcon style={{ color: "white" }} />}
      />

      {hasNews ? (
        news.map((item) => (
          <SidebarNewsItem
            key={item.id}
            item={item}
            to={`/news/${item.id}`}
            hasImage={false}
          />
        ))
      ) : (
        <Loader />
      )}
    </SidebarWrapper>
  );
}

export default React.memo(Sidebar);