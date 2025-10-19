import './App.css'
import styled from 'styled-components'
import Menu from './layout/Menu'
import AppRoutes from './routes'
import ButtonMenu from './ui/menu/ButtonMenu'
import FooterSection from './ui/footer/Footer'
  const AppContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `
function App() {

  return (
    <AppContainer>
    <Menu />
    <ButtonMenu />
    <AppRoutes />
    <FooterSection />
    </AppContainer>
  )
}

export default App
