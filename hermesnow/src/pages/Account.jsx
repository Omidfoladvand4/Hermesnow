import React from 'react'
import fakeUser from '../utils/fakeUser'
import styled from 'styled-components'
import formatNumber from '../utils/formartNumber'
import Title from '../components/Title'
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton'
import { useAuth } from '../contexts/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import { shimmer  ,neonPulse} from '../styles/animations'

const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  background: var(--color-info);
`

const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: .5fr 2fr;
  grid-template-rows : 2fr 1fr;
  gap: 25px;
  padding: 5% 15%;
  background: url('./public/images/HermesNowBannar.jpg');
  background-size: cover;
  background-attachment: fixed;
 animation: ${neonPulse} .5s ease ;
  @media (max-width : 768px) {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
  }
`

const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 1px rgba(0 , 0, 0, 0.8);
  font-weight: 900;
  cursor: pointer;
  background : rgba(255 , 255, 255, 0.1) ;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  color: var(--color-info);
  transition: all 0.3s ease-in;
  &:hover{
    backdrop-filter: blur(20px);
    transform: scale(1.01);
    border-radius: 1px;
  }
  @media (max-width : 786px) {
    width: 90vw;
    padding: 5px 0;
  }
  `;

const ProfileContainer = styled(BaseContainer)`
    grid-row: 1/3;     
`

const UserName = styled.div`
  font-size: var(--font-size-md);
  font-weight: 600;

`

const UserId = styled.i`
  font-size: var(--font-size-md);
`

const UserInformationContainer = styled(BaseContainer)`
  font-size: var(--font-size-md);
`

const UserImformationWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`
const Botton = styled.button`
  background-color: var(--color-info);
  padding: 15px 45px;
  color: #000000;
  font-weight: 900;
  margin: 15px;
`

const UserActionsContainer = styled(BaseContainer)`
    font-size: var(--font-size-xl);
    padding: 5px ;
    overflow: hidden;
`

const UserActionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient( #d4d4d4 , transparent);
  box-shadow: 0 2px 3px 1px rgba(0,0,0,0.6);
 animation:  ${shimmer} 0.3s ease-in;
  

`

const SavedNewsContainer = styled(BaseContainer)`
    grid-column: 1/-1;
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: var(--font-size-md);
`

function Account() {
  const { user, isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <>
        <Navbar>
          <Title font='16px' titleName='اکانت کاربری' color='var(--color-primary)' />
          <BackButton />
        </Navbar>
        <LoadingMessage>در حال بارگذاری...</LoadingMessage>
      </>
    )
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Navbar>
        <Title font='16px' titleName='اکانت کاربری' color='var(--color-primary)' />
        <BackButton />
      </Navbar>
      <Container>
        <ProfileContainer>
          <Avatar AvatarSrc={user?.Avatar} /> 
          <UserName>{user?.UserName || 'نامشخص'}</UserName>
          <UserId>User_ID:@hermes{user?.UserId || user?.id || 'شناسه نامشخص'}</UserId>
        </ProfileContainer>

        <UserInformationContainer>
          <TitleBox>
            <Title color='var(--color-accent)' titleName='اطلاعات شخصی' font='20px'/>
          </TitleBox>
          <UserImformationWrapper>
            <div>نام کامل: "{user?.UserName || 'نامشخص'}"</div>
            <div>سن: "{user?.UserAge ||  'ثبت نشده'}"</div>
            <div>کشور: "{user?.UserCountry || 'ثبت نشده'}"</div>
            <div>ایمیل: "{user?.UserEmail || 'ثبت نشده'}"</div>
            <div>رمز عبور: "{user?.UserPassword || 'ثبت نشده'}"</div>
            <div>موضوع مورد علاقه: "{user?.FavoritesTopic || 'مشخص نشده'}"</div>
            <Link to='/settings' >
          <Botton >رفتن به تنظیمات </Botton>
            </Link>
          </UserImformationWrapper>
        </UserInformationContainer>

        <UserActionsContainer>
          <TitleBox>
            <Title color='var(--color-accent)' titleName='فعالیت ها' font='20px'/>
          </TitleBox>
          <div style={{display: 'flex', gap: '10px'}}>
            <UserActionsBox title='خبر های خوانده شده'>
              {formatNumber(fakeUser.readNewsCount)}
            </UserActionsBox>
            <UserActionsBox title='تعداد کامنت ها'>
              {formatNumber(fakeUser.comentsCount)}
            </UserActionsBox>
            <UserActionsBox title='خبر های ذخیره شده'>
              {formatNumber(fakeUser.savedNewsCount)}
            </UserActionsBox>
          </div>
        </UserActionsContainer>

        <SavedNewsContainer>
          <TitleBox>
            <Title color='var(--color-accent)' titleName='خبرهای ذخیره شده' font='20px'/>
          </TitleBox>
          {/* محتوای خبرهای ذخیره شده */}
        </SavedNewsContainer>
      </Container>
    </>
  )
}

export default Account