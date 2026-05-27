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
  justify-content: space-between;
  list-style-type: none;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08), 
              0 2px 4px rgba(255, 255, 255, 0.12);
  gap: 15px;
  overflow-y: scroll;
`

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-md);
  font-weight: 900;
  cursor: pointer;
  margin-left: 15px;
  padding-right: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  color: var(--color-info);
  
  &:hover {
    color: var(--color-accent);
    transform: scale(1.1);
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
          <div>{user?.UserName || 'کاربر'}</div>
        </UserName>

        {/* <MenuItem>
          <AccessTimeIcon />
          <Link to='/top-news'>تازه ها</Link>
        </MenuItem> */}
        
        <MenuItem>
          <NewspaperIcon />
          <Link to='/your-news'></Link>
        </MenuItem>
        
        { user?.IsAdmin || user?.IsMainAdmin ? <MenuItem>
          <AddBoxIcon />
          <Link to='/news-editor'>درج خبر</Link>
        </MenuItem>  : null}
        
        {user?.IsMainAdmin  ? <MenuItem>
          <DashboardIcon />
          <Link to='/dashboard'><div>داشبورد</div></Link>
        </MenuItem> : null}
        
        
        <MenuItem>
          <LiveTvIcon />
          <Link to='/live-news'></Link>
        </MenuItem>
            <MenuItem ><div></div><Link to = '/login'><LoginIcon /></Link> </MenuItem>
      <MenuItem ><LogoutIcon /> <div onClick={hanleLogout}></div></MenuItem>
   
      </TopMenuItemsContainer>
      {/* <Logo /> */}
    </TopMenuContainer>
  )
}

export default TopMenu