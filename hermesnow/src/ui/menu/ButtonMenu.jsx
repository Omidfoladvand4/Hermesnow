import React from 'react'
import styled from 'styled-components'
import MenuItem from '../../components/MenuItem'
import { Link } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {fadeInRight} from '../../styles/animations'
import TopMenu from './TopMenu';
import HomeIcon from '@mui/icons-material/Home';

    const ButtonMenuContainer = styled.main`
      width: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      list-style-type: none;
      padding: 10px 30px;
      gap: 10px;
      background-color:var(--color-accent);
      position: sticky;
      top: 0;
      z-index: 90;
      animation: ${fadeInRight} 0.3s linear;
    `
const LinkItme = styled(Link)`
  color : var(--color-primary);
  text-decoration: none;
`
function ButtonMenu() {
  return (
    <ButtonMenuContainer>
        <MenuItem ><LinkItme to = '/'><HomeIcon fontSize='large' /> </LinkItme></MenuItem>
        <MenuItem ><LinkItme to = '/live-news'><LiveTvIcon  fontSize='large'/></LinkItme></MenuItem>
        <MenuItem ><LinkItme to = '/settings'><SettingsInputCompositeIcon  fontSize='large'/></LinkItme></MenuItem>
        <TopMenu />
         <MenuItem>
          <LinkItme to='/product-info'> <ProductionQuantityLimitsIcon  fontSize='large'/></LinkItme>
        </MenuItem>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu