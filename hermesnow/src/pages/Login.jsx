import styled from 'styled-components'
import BackButton from '../components/BackButton'
import Title from '../components/Title'
import LoginFeild from '../components/LoginForm'
const LoginPageContainer = styled.main`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
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
function Login() {
  return (
    <LoginPageContainer>
        <Navigations> <Title  titleName='ورود'  font='28px' color={`var(--color-primary)`}/> <BackButton />  </Navigations>
         <LoginFeild />
    </LoginPageContainer>
  )
}

export default Login