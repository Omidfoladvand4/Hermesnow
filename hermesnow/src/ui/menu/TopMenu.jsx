import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Logo from '../../components/Logo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from '../../contexts/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';

const TopMenuContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  z-index: 101;
  position: relative;
`

const TopMenuItemsContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08), 
              0 2px 4px rgba(255, 255, 255, 0.12);
`

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-md);
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  color: var(--color-info);
  
  &:hover {
    color: var(--color-accent);
    transform: scale(1.1);
  }
`
const  TopMenuItem = styled.div`
   display: block;
   font-size: var(--font-size-sx);

   @media (max-width : 800px) {
      display: none;
   }
`

function TopMenu() {
  const { user , logout } = useAuth()
  const hanleLogout = () =>{
    logout()
    }

  return (
    <TopMenuContainer>
      <TopMenuItemsContainer>
        <UserName>
          <Link to="/Account">
            <AccountCircleIcon sx={{ color: '#D4D4D4' }} />
          </Link>  
          <TopMenuItem>{user?.UserName || 'کاربر'}</TopMenuItem>
        </UserName>

         <MenuItem>
  <Link to='/top-news'>
    <AccessTimeIcon />
  </Link>
  <TopMenuItem>تازه ها</TopMenuItem>
</MenuItem>

<MenuItem>
  <Link to='/your-news'>
    <NewspaperIcon />
  </Link>
  <TopMenuItem>خبرهای شما</TopMenuItem>
</MenuItem>

{user?.IsAdmin || user?.IsMainAdmin ? (
  <MenuItem>
    <Link to='/news-editor'>
      <AddBoxIcon />
    </Link>
    <TopMenuItem>درج خبر</TopMenuItem>
  </MenuItem>
) : null}

{user?.IsMainAdmin ? (
  <MenuItem>
    <Link to='/dashboard'>
      <DashboardIcon />
    </Link>
    <TopMenuItem>داشبورد</TopMenuItem>
  </MenuItem>
) : null}

<MenuItem>
  <Link to='/live-news'>
    <LiveTvIcon />
  </Link>
  <TopMenuItem>اخبار زنده</TopMenuItem>
</MenuItem>
            <MenuItem ><TopMenuItem>ورود</TopMenuItem><Link to = '/login'><LoginIcon /></Link> </MenuItem>
      <MenuItem ><LogoutIcon /><TopMenuItem>خروج</TopMenuItem> <div onClick={hanleLogout}></div></MenuItem>
   
      </TopMenuItemsContainer>
      {/* <Logo /> */}
    </TopMenuContainer>
  )
}

export default TopMenu