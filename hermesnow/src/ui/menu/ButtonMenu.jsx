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

    const ButtonMenuContainer = styled.main`
      width: 5%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      list-style-type: none;
      padding: 10px 30px;
      gap: 10px;
      background-color:var(--color-);
      position: sticky;
      top: 0;
      z-index: 90;
      animation: ${fadeInRight} 0.3s linear;
    `
const LinkItme = styled(Link)`
  color : var(--color-info);
  text-decoration: none;
`
function ButtonMenu() {
  return (
    <ButtonMenuContainer>
        <MenuItem ><LinkItme to = '/'>خانه</LinkItme></MenuItem>
        <MenuItem ><LinkItme to = '/live-news'><LiveTvIcon /></LinkItme></MenuItem>
        <MenuItem ><LinkItme to = '/settings'><SettingsInputCompositeIcon /></LinkItme></MenuItem>
        <TopMenu />
         <MenuItem>
          <LinkItme to='/product-info'> <ProductionQuantityLimitsIcon /></LinkItme>
        </MenuItem>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu