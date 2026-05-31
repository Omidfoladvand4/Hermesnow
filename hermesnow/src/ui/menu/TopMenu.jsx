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
import {fadeInLeft } from '../../styles/animations'
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
    transform: scale(1.01);
  }
`
const  TopMenuItem = styled.div`
   display: block;
   font-size: var(--font-size-xs);

   @media (max-width : 800px) {
      display: none;
   }
`

function TopMenu() {
  const { user , logout } = useAuth()
  const navigate = useNavigate()
  const hanleLogout = () =>{
    logout()
    navigate('/')
    }

  return (
    <TopMenuContainer>
      <TopMenuItemsContainer>
        <UserName>
          <Link to="/Account">
            <AccountCircleIcon xs={{ color: '#D4D4D4' }} />
          </Link>  
          <TopMenuItem>{user?.UserName || 'مهمان'}</TopMenuItem>
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

            <MenuItem ><TopMenuItem>ورود</TopMenuItem><Link to = '/login'><LoginIcon /></Link> </MenuItem>
      <MenuItem><LogoutIcon onClick={hanleLogout}/><TopMenuItem>خروج</TopMenuItem> </MenuItem>
   
      </TopMenuItemsContainer>
      {/* <Logo /> */}
    </TopMenuContainer>
  )
}

export default TopMenu