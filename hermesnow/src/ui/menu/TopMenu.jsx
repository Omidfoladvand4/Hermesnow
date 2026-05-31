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
  justify-content: space-between;
  padding: 5px 15px;
  z-index: 101;
  position: relative;
  animation: ${fadeInLeft} 0.3s linear;
`

const TopMenuItemsContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;
  border-bottom: 2px solid var(--color-info);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 10px;
  }
`

const TopMenuItem = styled.div`
  font-size: var(--font-size-sm);
  @media (max-width: 768px) {
    font-size: var(--font-size-xxl);
  }
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
            <TopMenuItem>{user?.UserName || 'مهمان'}</TopMenuItem>
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/top-news">
            <AccessTimeIcon />
            <TopMenuItem>تازه ها</TopMenuItem>
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link to="/your-news">
            <NewspaperIcon />
            <TopMenuItem>خبرهای شما</TopMenuItem>
          </Link>
        </MenuItemWrapper>

        {(user?.IsAdmin || user?.IsMainAdmin) && (
          <MenuItemWrapper>
            <Link to="/news-editor">
              <AddBoxIcon />
              <TopMenuItem>درج خبر</TopMenuItem>
            </Link>
          </MenuItemWrapper>
        )}

        {user?.IsMainAdmin && (
          <MenuItemWrapper>
            <Link to="/dashboard">
              <DashboardIcon />
              <TopMenuItem>داشبورد</TopMenuItem>
            </Link>
          </MenuItemWrapper>
        )}

        {!user && (
          <MenuItemWrapper>
            <Link to="/login">
              <LoginIcon />
              <TopMenuItem>ورود</TopMenuItem>
            </Link>
          </MenuItemWrapper>
        )}

        {user && (
          <MenuItemWrapper onClick={handleLogout}>
            <LogoutIcon />
            <TopMenuItem>خروج</TopMenuItem>
          </MenuItemWrapper>
        )}
      </TopMenuItemsContainer>
    </TopMenuContainer>
  )
}

export default TopMenu