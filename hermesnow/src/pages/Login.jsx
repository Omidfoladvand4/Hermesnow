import styled from 'styled-components'
import LoginFeild from '../components/LoginForm'
import Navigations from '../components/Navigations'
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
        <Navigations color={`var(--color-primary)`} font='28px' titleName= 'ورود'></Navigations>
         <LoginFeild />
         <LoginLink>
          <p>حساب کاربری ندارید؟ <Link to="/signup">ثبت‌نام کنید</Link></p>
        </LoginLink>
    </LoginPageContainer>
  )
}

export default Login