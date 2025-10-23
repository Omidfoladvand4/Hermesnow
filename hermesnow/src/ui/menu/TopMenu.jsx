import React, { useEffect, useState } from 'react'
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Logo from '../../components/Logo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
    const TopMenuContainer = styled.main`
         width: 100%;
         display: flex;
         align-items:  center;
         justify-content: space-between;
         padding:5px 15px;
         z-index: 101;
         position: relative;
         
         `
    const TopMenuItemsContainer = styled.ul`
         flex:  1;
         display: flex;
         align-items:  center;
         list-style-type: none;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08), 
            0 2px 4px rgba(255, 255, 255, 0.12);
         gap: 15px;
    `
    const UserName = styled.div`
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 900;
        cursor: pointer;
        margin-left: 15px;
        padding-right: 12px;
        text-decoration: none;
        transition:  all 0.3s ease;
        color: var(--color-info);
           &:hover {
            color: var(--color-accent);
            transform: scale(1.2);
        }
    `

function TopMenu() {
 const [userName, setUserName] = useState('')

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        const user = JSON.parse(userData)
        setUserName(user.UserName || user.username || 'کاربر')
      } catch (error) {
        console.error('خطا در خواندن اطلاعات کاربر:', error)
      }
    }else{
        setUserName('')
    }
  }, [userName])
  return (
     <TopMenuContainer>
        <TopMenuItemsContainer>
            <UserName>
               <Link  to="/Account" ><AccountCircleIcon sx={{color : '#D4D4D4'}}/></Link>  
             <div>{userName}</div>
            </UserName>

            <MenuItem> <AccessTimeIcon /> <Link to = '/top-news' >تازه ها</Link></MenuItem>
            <MenuItem><NewspaperIcon /><Link to='/your-news' >خبر های من </Link> </MenuItem>
            <MenuItem ><AddBoxIcon /><Link to = '/news-editor'>درج خبر</Link></MenuItem>
            <MenuItem><DashboardIcon /> <Link  to='/dashboard'>داشبورد</Link> </MenuItem>
            <MenuItem ><ConnectWithoutContactIcon /><Link to = '/َaboutus'>ارتباط با ما</Link></MenuItem>
            <MenuItem ><LiveTvIcon /><Link to = '/live-news'>زنده</Link></MenuItem>
        </TopMenuItemsContainer>
        <Logo />
     </TopMenuContainer>
  )
      }

export default TopMenu