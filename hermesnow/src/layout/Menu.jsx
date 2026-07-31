import React, { useState } from "react";
import styled from "styled-components";
import AdminMenu from "../ui/menu/AdminMenu";
import UserMenu from "../ui/menu/UserMenu";
import { useAuth } from "../contexts/AuthContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const MenuContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color : var(--color-secondary);

  @media (max-width: 1000px) {
    flex-direction: column;
    bottom: 0;
    top: auto;
    gap: 0;
    padding: 0 8px ;
  }
`;
const MenuIcon = styled.div`
  display: none;
  color: var(--color-secondary);
  position: absolute;
  top: -18px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border-radius: 50%;
  svg{
    display: none;
  }
  @media (max-width: 1000px) {
    display: block;
    svg{
      display: block;
      font-size: 40px;
    }
  }
`;
function Menu() {
  const { user } = useAuth();
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  return (
    <MenuContainer>
      {(user?.IsAdmin || user?.IsMainAdmin) && (
        <MenuIcon onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {isOpenMenu ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </MenuIcon>
      )}
      <UserMenu />
      {(user?.IsAdmin || user?.IsMainAdmin) && isOpenMenu && <AdminMenu />}
    </MenuContainer>
  );
}

export default Menu;
