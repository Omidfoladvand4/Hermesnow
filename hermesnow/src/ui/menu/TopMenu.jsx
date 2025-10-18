import React from 'react'
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LiveTvIcon from '@mui/icons-material/LiveTv';
function TopMenu() {
    const TopMenuContainer = styled.main`
         width: 100%;
         display: flex;
         align-items:  center;
         justify-content: space-between;
         padding:5px 15px;
         box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
          
    `
    const TopMenuItemsContainer = styled.ul`
         flex:  1;
         display: flex;
         align-items:  center;
         list-style-type: none;
         gap: 15px;
    `
    const UserName = styled.div`
        font-size: 24px;
        font-weight: 900;
        cursor: pointer;
        margin-left: 15px;
        text-decoration: none;
        transition:  all 0.3s ease;
           &:hover {
            color: var(--color-accent);
            transform: scale(1.2);
        }
    `
    const Logo = styled.div`
         width: 20%;
         align-items: end;
         text-align: center;
        color: var(--color-secondary);
        overflow: hidden;
    
    `
    const LogoText = styled.div`
       font-size: 32px;
          font-weight: 900;
          transition: color 0.3s ease-in;
        animation:  animate 1s infinite;
        @keyframes animate {
          form {
             transform: scale(1);
             color: var(--color-secondary);
             opacity: 1;
          }
          to{
             transform: scale(1.5);
              color: var(--color-info);
              opacity: 0.8;

          }
        }
    `
    function scrollHendle() {
      const scroll =    document.body.scrollHeight
      console.log(scroll);
      
    }
  return (
     <TopMenuContainer on={scrollHendle}>
        <TopMenuItemsContainer>
            <UserName>
             <Link  to="/Account"  style={{ color: 'var(--color-accent)', textDecoration: 'none' , fontSize : '24px ' ,}}  >نام کاربری</Link>
            </UserName>

            <MenuItem> <AccessTimeIcon /> <Link to = '/top-news' >تازه ها</Link></MenuItem>
            <MenuItem><NewspaperIcon /><Link to='/your-news' >خبر های من </Link> </MenuItem>
            <MenuItem ><AddBoxIcon /><Link to = '/news-editor'>درج خبر</Link></MenuItem>
            <MenuItem><DashboardIcon /> <Link  to='/dashboard'>داشبورد</Link> </MenuItem>
            <MenuItem ><ConnectWithoutContactIcon /><Link to = '/َaboutus'>ارتباط با ما</Link></MenuItem>
            <MenuItem ><LiveTvIcon /><Link to = '/live-news'>زنده</Link></MenuItem>
        </TopMenuItemsContainer>
        <Logo><LogoText>HERMESNOW</LogoText></Logo>
     </TopMenuContainer>
  )
}

export default TopMenu