import React from 'react'
import  styled  from 'styled-components'
import TopMenu from '../ui/menu/TopMenu'
    const MenuContainer = styled.div`
         width: 100%;
         display: flex;
         flex-direction: column;
         background: var(--color-primary);
  `
function Menu() {
  return (
    <MenuContainer>
        <TopMenu />
    </MenuContainer>
  )
}

export default Menu