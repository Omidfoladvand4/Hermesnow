import React from 'react'
import styled from 'styled-components'
import MenuItem from '../../components/MenuItem'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {fadeInRight} from '../../styles/animations'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
    const UserMenuContainer = styled.main`
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 30px;
      animation: ${fadeInRight} 0.3s linear;

        @media (max-width : 786px) {
        width: 100%;
        justify-content: center;
        padding: 0;
    
  }
    `
const LinkItem = styled(Link)`
  color : var(--color-primary);
  text-decoration: none;
`
function UserMenu() {
    const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <UserMenuContainer> 
        <MenuItem ><LinkItem to = '/'><HomeIcon fontSize='large'   sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/> </LinkItem></MenuItem>
        <MenuItem ><LinkItem to = '/live-news'><LiveTvIcon  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/></LinkItem></MenuItem>
        <MenuItem ><LinkItem to = '/live-news'><AccessTimeIcon  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/></LinkItem></MenuItem>
        <MenuItem ><LinkItem to = '/settings'><SettingsInputCompositeIcon  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/></LinkItem></MenuItem>

        

          {!user && (
                  <MenuItem>
                    <LinkItem to="/login">
                      <LoginIcon  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
                    </LinkItem>
                  </MenuItem>
                )}
        
                {user && (
                  <MenuItem onClick={handleLogout}>
                     <LinkItem to="/login">
                    <LogoutIcon  fontSize='large'  sx={{ fontSize: { xs: 48, sm: 44, md : 40, lg: 36 } }}/>
                    </LinkItem>
                  </MenuItem>
                )}
    </UserMenuContainer>
  )
}

export default UserMenu