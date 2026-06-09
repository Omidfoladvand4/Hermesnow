import styled from "styled-components";
import LoginFeild from "../components/LoginForm";
import { slideInStagger } from "../styles/animations";
const LoginPageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      <LoginFeild />
     </LoginPageContainer>
  );
}

export default Login;
