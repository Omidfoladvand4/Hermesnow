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


const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: .5fr 2fr;
  grid-template-rows : 2fr 1fr;
  gap: 25px;
  padding: 5% 15%;
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
  border-radius: 15px;
  color: var(--color-info);
  transition: all 0.3s ease-in;
  &:hover{
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
    background-color: var(--color-accent);
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
  background-color: var(--color-accent);
`

const UserImformationWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`
const Botton = styled.button`
  background-color: var(--color-primary);
  padding: 15px 45px;
  color: white;
  font-size: var(--font-size-xl);
  font-weight: 900;
  margin: 15px;
`

const UserActionsContainer = styled(BaseContainer)`
    font-size: var(--font-size-xl);
    padding: 5px ;
    background-color: var(--color-accent);
    overflow: hidden;
`

const UserActionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient( #d4d4d4 , transparent);
 animation:  ${shimmer} 0.3s ease-in;
  

`

const SavedNewsContainer = styled(BaseContainer)`
    grid-column: 1/-1;
    background-color: var(--color-accent);
    margin-bottom: 80px;
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
        <LoadingMessage>در حال بارگذاری...</LoadingMessage>
      </>
    )
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Container>
        <ProfileContainer>
          <Avatar AvatarSrc={user?.Avatar} /> 
          <UserName>{user?.UserName || 'نامشخص'}</UserName>
          <UserId>User_ID:@hermes{user?.UserId || user?.id || 'شناسه نامشخص'}</UserId>
        </ProfileContainer>

        <UserInformationContainer>
          <TitleBox>
            <Title color='var(--color-primary)' titleName='اطلاعات شخصی' font='var(--font-size-xl)'/>
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
            <Title color='var(--color-primary)' titleName='فعالیت ها' font='var(--font-size-xl)'/>
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
            <Title color='var(--color-primary)' titleName='خبرهای ذخیره شده' font='var(--font-size-xl)'/>
          </TitleBox>
          {/* محتوای خبرهای ذخیره شده */}
        </SavedNewsContainer>
      </Container>
    </>
  )
}

export default Account