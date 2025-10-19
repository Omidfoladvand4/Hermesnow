import React from 'react'
import styled from 'styled-components'
import MenuItem from '../../components/MenuItem'
import { Link } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import LoginIcon from '@mui/icons-material/Login';
import LiveTvIcon from '@mui/icons-material/LiveTv';
    const ButtonMenuContainer = styled.main`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      padding: 10px 20px;
      background-color:var(--color-primary);
      position: fixed;
      top: 0;
      z-index: -1;
    `
function ButtonMenu() {
  return (
    <ButtonMenuContainer>
        <MenuItem ><Link to = '/category'>اقتصاد</Link></MenuItem>
        <MenuItem ><Link to = '/category'>تجارت</Link></MenuItem>
        <MenuItem ><Link to = '/category'>فرهنگی</Link></MenuItem>
        <MenuItem ><Link to = '/category'>سیاست</Link></MenuItem>
        <MenuItem ><Link to = '/category'>سلامتی</Link></MenuItem>
        <MenuItem> <Link to='/' >جستجو</Link>  </MenuItem>
         <MenuItem >فیلتر</MenuItem>
        <MenuItem ><AddBoxIcon /><Link to = '/news-editor'>درج خبر</Link></MenuItem>
        <MenuItem ><Link to = '/live-news'><LiveTvIcon /></Link></MenuItem>
        <MenuItem ><Link to = '/settings'><SettingsInputCompositeIcon /></Link></MenuItem>
        <MenuItem ><Link to = '/login'><LoginIcon /></Link></MenuItem>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu