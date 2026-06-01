import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from '../../contexts/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { fadeInLeft } from '../../styles/animations'
import { useNavigate } from 'react-router-dom';

const TopMenuContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  animation: ${fadeInLeft} 0.3s linear;
`

const TopMenuItemsContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  
`

const MenuItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--color-accent);
  transition: all 0.3s ease;
  
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: inherit;
    color: var(--color-primary);
  }
  
  &:hover {
    transform: scale(1.2);
  }
`

function TopMenu() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <TopMenuContainer>
      <TopMenuItemsContainer>
        <MenuItemWrapper>
          <Link to="/Account">
            <AccountCircleIcon fontSize='large'/>
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/top-news">
            <AccessTimeIcon  fontSize='large'/>
         
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/your-news">
            <NewspaperIcon  fontSize='large'/>
           
          </Link>
        </MenuItemWrapper>

        {(user?.IsAdmin || user?.IsMainAdmin) && (
          <MenuItemWrapper>
            <Link to="/news-editor">
              <AddBoxIcon  fontSize='large'/>
            
            </Link>
          </MenuItemWrapper>
        )}

        {user?.IsMainAdmin && (
          <MenuItemWrapper>
            <Link to="/dashboard">
              <DashboardIcon  fontSize='large'/>
            </Link>
          </MenuItemWrapper>
        )}

        {!user && (
          <MenuItemWrapper>
            <Link to="/login">
              <LoginIcon  fontSize='large'/>
            </Link>
          </MenuItemWrapper>
        )}

        {user && (
          <MenuItemWrapper onClick={handleLogout} style={{color : 'var(--color-primary)'}}>
            <LogoutIcon  fontSize='large'/>
          </MenuItemWrapper>
        )}
      </TopMenuItemsContainer>
    </TopMenuContainer>
  )
}

export default TopMenu