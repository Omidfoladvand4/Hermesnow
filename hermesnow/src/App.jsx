import "./App.css";
import styled from "styled-components";
import Menu from "./layout/Menu";
import AppRoutes from "./routes";
import Header from "./layout/Header";
import { AuthProvider } from "./contexts/AuthContext";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
function App() {
  return (
    <AuthProvider>
      <AppContainer>
         <Menu />
        <AppRoutes />
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
