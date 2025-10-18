import './App.css'
import styled from 'styled-components'
import Menu from './layout/Menu'
import AppRoutes from './routes'
import FooterMenu from './ui/menu/FooterMenu'
function App() {
  const AppContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `

  return (
  <>
    <AppContainer>
    <Menu />
    <FooterMenu />
    </AppContainer>
    <AppRoutes />
  </>
  )
}

export default App
