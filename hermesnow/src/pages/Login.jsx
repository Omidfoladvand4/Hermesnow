import styled from 'styled-components'
import BackButton from '../components/BackButton'
import Title from '../components/Title'
import LoginFeild from '../components/LoginForm'
import  { Link } from 'react-router-dom'
const LoginPageContainer = styled.main`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: url('./public/images/HermesNowBannar.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: fixed;
top: 0;
left: 0;
z-index: 120;
`
const Navigations = styled.div`
  width: 100%;
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  position: absolute;
  top: 0;

`
const LoginLink = styled.div`
    text-align: center;
    margin-top: 15px;
    
    a {
        color: var(--color-secondary);
        text-decoration: none;
        font-weight: bold;
        
        &:hover {
            text-decoration: underline;
        }
    }
`
function Login() {
  return (
    <LoginPageContainer>
        <Navigations> <Title  titleName='ورود'  font='28px' color={`var(--color-primary)`}/> <BackButton />  </Navigations>
         <LoginFeild />
         <LoginLink>
          <p>حساب کاربری ندارید؟ <Link to="/signup">ثبت‌نام کنید</Link></p>
        </LoginLink>
    </LoginPageContainer>
  )
}

export default Login