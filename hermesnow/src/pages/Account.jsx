import React from 'react'
import fakeUser from '../utils/fakeUser'
import styled from 'styled-components'
import { useNavigate }from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import formatNumber from '../utils/formartNumber'
import Title from '../components/Title'
import Avatar from '../components/Avatar';
const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  background: var(--color-info);
`
const BackIcon = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;  
  background: var(--color-primary);
  color: var(--color-secondary);

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
`;
const ProfileContainer = styled(BaseContainer)`
    grid-row: 1/3;     
`
const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;

`
const UserId = styled.i`
  font-size: 14px;
`

const UserInformationContainer = styled(BaseContainer)`
font-size: 20px;
`
const UserImformationWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`
const UserActionsContainer = styled(BaseContainer)`
    font-size: 25px;
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
    animation: buncing 1.5s ease-in;
    @keyframes buncing {
      0% {
           transform: translateY(-250px) scale(1.5) rotate(360deg);
      }
      50%{
          transform: translateY(250px) scale(1.5) ;
          opacity: 0;

      }
      100%{
        transform: translate(0) scale(1) rotate(360deg);
        opacity: 1;
      }
  }
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

function Account() {
  const navigate = useNavigate()
  const backHandle = () => [
     navigate(-1)
  ]
  return (
   <>
   <Navbar>
      <Title font='16px' titleName='اکانت کاربری' color={`var(--color-primary)`} />
    <BackIcon  onClick={backHandle}>
         <ArrowBackIcon /> بازگشت  
 </BackIcon>
    </Navbar>
    <Container>
         <ProfileContainer >
           <Avatar  AvatarSrc={fakeUser.avatar}/> 
           <UserName >{fakeUser.fullName}</UserName>
           <UserId>{fakeUser.userId}</UserId>
            </ProfileContainer>

         <UserInformationContainer>
            <TitleBox>
             <Title color={`var(--color-accent)`} titleName='اطلاعات شخصی' font='20px'/>
         </TitleBox>
        <UserImformationWrapper >
              <div> نام کامل : "  {fakeUser.fullName} "</div>
            <div> سن  : "   {fakeUser.age} "</div>
            <div> کشور  : "  {fakeUser.country} "</div>
            <div>  موضوع مورد علاقه : "   {fakeUser.favoriteCategory} "</div>
        </UserImformationWrapper>

         </UserInformationContainer>

         <UserActionsContainer >
            <TitleBox>
             <Title color={`var(--color-accent)`} titleName='فعالیت ها' font='20px'/>
         </TitleBox>
             <div style={{display : 'flex' , gap : '10px'}}>
              <UserActionsBox  title='خبر های خوانده شده'>{formatNumber(fakeUser.readNewsCount)}</UserActionsBox>
              <UserActionsBox  title='تعداد کامنت ها'>{formatNumber(fakeUser.comentsCount)}</UserActionsBox>
              <UserActionsBox  title=' خبر های ذخیره شده'>{formatNumber(fakeUser.savedNewsCount)}</UserActionsBox>
             </div>
          
         </UserActionsContainer>

         <SavedNewsContainer >
            <TitleBox>
             <Title color={`var(--color-accent)`} titleName='خبرهای ذخیره شده' font='20px'/>
         </TitleBox>
            

         </SavedNewsContainer>

    </Container>
   </>
  )
}

export default Account