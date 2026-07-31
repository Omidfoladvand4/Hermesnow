import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailIcon from "@mui/icons-material/Email";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DownloadIcon from "@mui/icons-material/Download";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from '@mui/icons-material/Public';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';



const FooterContainer = styled.footer`
  width: 95%;
  background: var(--color-background, #282929);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 60px 40px 20px;
  direction: rtl;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px 16px;
    margin-top: 16px;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid  var(--color-primary);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BrandName = styled.h2`
  font-size: var(--font-size-xxl);
  font-weight: 900;
  color: var(--color-primary, #6c92a0);
  margin: 0;
  letter-spacing: -1px;

  span {
    color: var(--color-accent, #c07b74);
  }
`;

const BrandSlogan = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-secondary, #d4d4d4);
  opacity: 0.7;
  margin: 0;
`;

const BrandDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-secondary, #d4d4d4);
  opacity: 0.6;
  line-height: 1.8;
  max-width: 400px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

const ActionButton = styled(Link)`
  padding: 10px 24px;
  border-radius: 30px;
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
  }
  &.primary {
    background: var(--color-primary, #6c92a0);
    color: #fff;

    &:hover {
      background: #5a7d8a;
      box-shadow: 0 4px 20px rgba(108, 146, 160, 0.3);
    }
  }

  &.secondary {
    background: var(--color-card, #323333);
    color: var(--color-secondary, #d4d4d4);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--color-primary, #6c92a0);
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColumnTitle = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: 900;
  color: var(--color-secondary, #d4d4d4);
  margin: 0 0 8px 0;
`;

const ColumnLink = styled(Link)`
  font-size: var(--font-size-md);
  color: var(--color-secondary, #d4d4d4);
  opacity: 0.6;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 1;
    color: var(--color-primary, #6c92a0);
    transform: translateX(-4px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary, #6c92a0);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    font-size: 16px;
  }
`;

const NewsletterSection = styled.div`
  margin-top: 40px;
  padding: 30px 40px;
  background:  #323333; 
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 20px;
    text-align: center;
  }
`;

const NewsletterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: var(--font-size-xl);
    font-weight: 900;
    color: var(--color-secondary, #d4d4d4);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: var(--color-accent, #c07b74);
    }
  }

  p {
    font-size: var(--font-size-sm);
    color: var(--color-secondary, #d4d4d4);
    opacity: 0.6;
    margin: 0;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 12px;
  flex: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 14px 20px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: var(--color-accent, #282929);
  color: var(--color-secondary, #d4d4d4);
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(108, 146, 160, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsletterButton = styled.button`
  padding: 14px 32px;
  border-radius: 30px;
  border: none;
  background: var(--color-accent);
  color: #fff;
  font-weight: 900;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px var(--color-info);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
  padding: 30px 40px;
  border-radius: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 32px;
    color: var(--color-primary, #6c92a0);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;

  .number {
    font-size: var(--font-size-xl);
    font-weight: 900;
    color: var(--color-secondary, #d4d4d4);
  }

  .label {
    font-size: var(--font-size-md);
    color: var(--color-secondary, #d4d4d4);
    opacity: 0.5;
  }
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid var(--color-primary);
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent, #323333);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary, #d4d4d4);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    transform: translateY(-4px);
    background: var(--color-primary, #6c92a0);
    color: #fff;
    border-color: var(--color-primary, #6c92a0);
    box-shadow: 0 4px 16px rgba(108, 146, 160, 0.3);
  }

  svg {
    font-size: 22px;
  }
`;

const Copyright = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-secondary, #d4d4d4);
  opacity: 0.5;

  span {
    color: var(--color-accent, #c07b74);
    font-weight: 700;
  }
`;

const LiveStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-md);
  color: var(--color-secondary, #d4d4d4);
  opacity: 0.6;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4caf50;
    animation: pulse 2s infinite;

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
    }
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 30px;
  left: 45px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: var(--color-primary, #6c92a0);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(108, 146, 160, 0.3);
  z-index: 1000;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) =>
    props.$visible ? "translateY(0)" : "translateY(100px)"};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 30px rgba(108, 146, 160, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 20px;
    left: 20px;

    svg {
      font-size: 22px;
    }
  }
`;


function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const stats = [
    { icon: <NewspaperIcon />, number: "۱۲,۴۵۰+", label: "اخبار منتشر شده" },
    { icon: <PeopleIcon />, number: "۸۲۴", label: "کاربران فعال" },
    { icon: <TrendingUpIcon />, number: "۵۶", label: "خبر داغ امروز" },
    { icon: <TelegramIcon />, number: "۲,۱۰۰", label: "عضو کانال" },
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <TopSection>
          <BrandSection>
            <BrandName>
              Hermes<span>Now</span>
            </BrandName>
            <BrandSlogan>همیشه یک قدم جلوتر از خبر</BrandSlogan>
            <BrandDescription>
              باخبرترین اخبار ایران و جهان را در سریع‌ترین زمان ممکن دنبال
              کنید.
            </BrandDescription>
            <ActionButtons>
              <ActionButton to="/download" className="primary">
                <DownloadIcon /> دانلود اپلیکیشن
              </ActionButton>
              <ActionButton to="/" className="secondary">
                <HomeIcon /> اخبار امروز
              </ActionButton>
            </ActionButtons>
          </BrandSection>

          <Column>
            <ColumnTitle>اخبار</ColumnTitle>
            <ColumnLink to="/">🇮🇷 اخبار ایران</ColumnLink>
            <ColumnLink to="/"><PublicIcon /> جهان</ColumnLink>
            <ColumnLink to="/category/اقتصاد"><MonetizationOnIcon /> اقتصاد</ColumnLink>
            <ColumnLink to="/category/ورزشی"><SportsBasketballIcon /> ورزش</ColumnLink>
            <ColumnLink to="/"><ColorLensIcon />هنر</ColumnLink>
          </Column>

          <Column>
            <ColumnTitle>حساب کاربری</ColumnTitle>
            <ColumnLink to="/account"><PersonIcon /> پروفایل</ColumnLink>
            <ColumnLink to="/your-news"><NewspaperIcon /> اخبار من</ColumnLink>
            <ColumnLink to="/settings"><SettingsIcon /> تنظیمات</ColumnLink>
            <ColumnLink to="/dashboard"><DashboardIcon /> داشبورد</ColumnLink>
          </Column>

       
          <Column>
            <ColumnTitle>ابزارها</ColumnTitle>
            <ColumnLink to="/"> تبدیل متن به صوت</ColumnLink>
            <ColumnLink to="/"> دانلود PDF</ColumnLink>
            <ColumnLink to="/"> اشتراک‌گذاری</ColumnLink>
            <ColumnLink to="/"> جستجو</ColumnLink>
          </Column>
        </TopSection>

        <NewsletterSection>
          <NewsletterInfo>
            <h3>
              <EmailIcon /> عضویت در خبرنامه
            </h3>
            <p>با عضو شدن در خبرنامه، اولین نفری باش که از اخبار جدید باخبر میشی</p>
          </NewsletterInfo>
          <NewsletterForm >
            <NewsletterInput
              type="email"
              placeholder="آدرس ایمیل خود را وارد کنید..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <NewsletterButton type="submit">
              <EmailIcon /> عضویت
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              {stat.icon}
              <StatInfo>
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </StatInfo>
            </StatItem>
          ))}
        </StatsSection>

        <BottomSection>
          <SocialLinks>
            <SocialLink href="#" >
              <TelegramIcon />
            </SocialLink>
            <SocialLink href="#" >
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="#" >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://github.com/Omidfoladvand4" target="_blank">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="#" >
              <XIcon />
            </SocialLink>
          </SocialLinks>

          <LiveStatus>
            <span className="dot" />
            سرویس آنلاین
          </LiveStatus>

          <Copyright>
            © 2026 <span>HermesNow</span> | تمامی حقوق محفوظ است.
          </Copyright>
        </BottomSection>
      </FooterWrapper>

      <ScrollToTop onClick={scrollToTop} $visible={showScrollTop}>
        <ArrowUpwardIcon />
      </ScrollToTop>
    </FooterContainer>
  );
}

export default Footer;