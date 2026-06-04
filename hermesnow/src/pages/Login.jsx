import styled from "styled-components";
import LoginFeild from "../components/LoginForm";
import Navigations from "../components/Navigations";
import { slideInStagger } from "../styles/animations";
import bgImage from "../assets/HermesNowBannar1.jpg";
const LoginPageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  margin-top: 0;
  animation: ${slideInStagger} 0.5s linear;
`;
function Login() {
  return (
    <LoginPageContainer>
      <Navigations
        color={`var(--color-primary)`}
        font={"var(--font-size-xl)"}
        titleName="ورود"></Navigations>
      <LoginFeild />
     
    </LoginPageContainer>
  );
}

export default Login;
