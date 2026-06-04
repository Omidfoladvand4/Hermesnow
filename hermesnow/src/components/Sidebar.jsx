import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { useNews } from '../hooks/useGetNews'
import posterImage from "../assets/HermesNowBannar1.jpg";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import styled from 'styled-components'
import Loader from './Loader'


const SidebarWrapper = styled.div`
  width: 30%;
  overflow-y: scroll;
  height: 100vh;
  background-color:   var(--color-accent);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 10px solid var(--color-primary);
  &::-webkit-scrollbar {
    width: 6px;
  }
  @media (max-width: 900px) {
     width: 90vw;
     margin : 10px auto;
     padding: 10px 10px;
  }
  `

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  `

const WelcomeMessage = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  `

const RegisterCard = styled.div`
  background-color: var(--color-accent);
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 10px 15px;
  line-height: 1.5;
  `

const RegisterTitle = styled.h2`
  color: var(--color-primary);
  font-size : var(--font-size-xxl)
`

const RegisterSubtitle = styled.h4`
color: var(--color-secondary);
font-size: var(--font-size-xl);
`

const RegisterLink = styled(Link)`
  width: 40%;
  background-color: var(--color-primary);
  color: wheat;
  font-size: var(--font-size-xl);
  font-weight: 900;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: block;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;
  margin: 15px 0;

  &:hover {
    background-color: white;
    color: var(--color-primary);
    }
`

const RegisterTerms = styled.h3`
font-size: var(--font-size-base);
color: var(--color-info);
word-spacing: 1.8px;
display: inline-block;
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top : 15px;
`

const SectionHeader = styled.div`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
`

const SectionTitle = styled.div`
  font-size: var(--font-size-md);
  font-weight: 700;
  color: white;
`

const NewsList = styled.div`
  width: 100%;
`

const NewsItemLink = styled(Link)`
  text-decoration: none;
  display: block;
`

const NewsItemCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  border-bottom: 2px solid var(--color-primary);
  transition: background-color 0.2s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

const NewsInfo = styled.div`
  flex: 1;
`

const NewsTitle = styled.div`
  color: white;
  font-size: var(--font-size-sm);
  margin-bottom: 8px;
  font-weight: 500;
`

const JournalistName = styled.div`
  color: #9ca3af;
  font-size: var(--font-size-md);
`

const NewsImage = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
`

const PickedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PickedHeader = styled.div`
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
`

const PickedTitle = styled.div`
  font-size: var(--font-size-md);
  font-weight: 700;
  color: white;
`

const PickedList = styled.div`
  width: 100%;
`

const PickedItemLink = styled(Link)`
  text-decoration: none;
  display: block;
`

const PickedItemCard = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  border-bottom: 2px solid var(--color-primary);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary);
  }
`

const PickedItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
`

const Div = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-primary);
`

const PickedItemTitle = styled.div`
  color: #9ca3af;
  font-size: 1.25rem;
`


function Sidebar() {
  const { user } = useAuth()
  const { news } = useNews()

  return (
    <SidebarWrapper>
      <UserSection>
        {user ? (
          <WelcomeMessage> سلام {user?.UserName} خوش آمدی </WelcomeMessage>
        ) : (
          <RegisterCard>
            <RegisterTitle>عضوی از وبسایت ما باشید</RegisterTitle>
            <RegisterSubtitle>
              اگر هنوز ثبت نام نکردید همین حالا ثبت نام کنید
            </RegisterSubtitle>
            <RegisterLink to={'/signup'}>ورود</RegisterLink>
            <RegisterTerms>
              ورود یا ثبت نام شما به منزله‌ی موافقت با سیاست های حفظ حریم خصوصی
              و قوانین و مقررات ماست.
            </RegisterTerms>
          </RegisterCard>
        )}
      </UserSection>

      <SectionContainer>
        <SectionHeader>
          <SectionTitle>یاداشت</SectionTitle>
          <NoteAddIcon style={{ color: 'white' }} />
        </SectionHeader>

        <NewsList>
           {news && news.length !== 0 ? 
            news?.map((item) => (
            <NewsItemLink key={item.id} to={`/news/${item.id}`}>
              <NewsItemCard>
                <NewsInfo>
                  <NewsTitle>{item.NewsTitle}</NewsTitle>
                  <JournalistName>{item.Journalist}</JournalistName>
                </NewsInfo>
                <NewsImage src={item.MainImage || posterImage} alt={item.NewsTitle} />
              </NewsItemCard>
            </NewsItemLink>
          ))
            : <Loader />}
        </NewsList>
      </SectionContainer>

      <PickedSection>
        <PickedHeader>
          <PickedTitle>برگزیده ها</PickedTitle>
          <AppRegistrationIcon style={{ color: 'white' }} />
        </PickedHeader>

        <PickedList>
          {news && news.length !== 0 ? 
               news?.map((item) => (
            <PickedItemLink key={item.id} to={`/news/${item.id}`}>
              <PickedItemCard>
                <PickedItemContent>
                  <Div />
                  <PickedItemTitle>{item.NewsTitle}</PickedItemTitle>
                </PickedItemContent>
              </PickedItemCard>
            </PickedItemLink>
          )) 
              :  <Loader />}
        </PickedList>
      </PickedSection>
    </SidebarWrapper>
  )
}

export default Sidebar