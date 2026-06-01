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
  flex-direction: column;
  animation: ${fadeInLeft} 0.3s linear;
`

const TopMenuItemsContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  list-style-type: none;
  
`

const MenuItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--color-info);
  
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    color: var(--color-secondary);
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
            <AccountCircleIcon />
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/top-news">
            <AccessTimeIcon />
         
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/your-news">
            <NewspaperIcon />
           
          </Link>
        </MenuItemWrapper>

        {(user?.IsAdmin || user?.IsMainAdmin) && (
          <MenuItemWrapper>
            <Link to="/news-editor">
              <AddBoxIcon />
            
            </Link>
          </MenuItemWrapper>
        )}

        {user?.IsMainAdmin && (
          <MenuItemWrapper>
            <Link to="/dashboard">
              <DashboardIcon />
            </Link>
          </MenuItemWrapper>
        )}

        {!user && (
          <MenuItemWrapper>
            <Link to="/login">
              <LoginIcon />
            </Link>
          </MenuItemWrapper>
        )}

        {user && (
          <MenuItemWrapper onClick={handleLogout}>
            <LogoutIcon />
          </MenuItemWrapper>
        )}
      </TopMenuItemsContainer>
    </TopMenuContainer>
  )
}

export default TopMenu