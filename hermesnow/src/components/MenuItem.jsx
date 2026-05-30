import React from 'react'
import styled from 'styled-components'
     const MenuItemContainer = styled.li` 
        font-size: var(--font-size-sx);
        font-weight: 600;
        color : var(--color-info);
        cursor: pointer;
        padding-left: 5px;
        margin: 0 1%;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover {
            color: var(--color-accent);
            transform: scale(1.2);
        }
        @media (max-width : 400px ){
          width: 18%;
        }
         @media (max-width : 768px ){
          width: 8%;
        }
    `
  const MenuItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `
function MenuItem({children}) {
  return (
     <MenuItemContainer><MenuItemContent>{children}</MenuItemContent></MenuItemContainer>
  )
}

export default MenuItem