import React from 'react'
import styled from 'styled-components'
     const MenuItemContainer = styled.li` 
        width: 12%;
        font-size: 16px;
        font-weight: 600;
        color : var(--color-info);
        cursor: pointer;
        padding-left: 15px;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover {
            color: var(--color-accent);
            transform: scale(1.2);
        }
    `
  const MenuItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `
function MenuItem({children}) {
  return (
     <MenuItemContainer><MenuItemContent>{children}</MenuItemContent></MenuItemContainer>
  )
}

export default MenuItem