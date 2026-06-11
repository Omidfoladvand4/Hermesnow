import React, { useState } from "react";
import styled from "styled-components";
import AdminMenu from "../ui/menu/AdminMenu";
import UserMenu from "../ui/menu/UserMenu";
import { useAuth } from "../contexts/AuthContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;

  @media (max-width: 1000px) {
    flex-direction: column;
    bottom: 0;
    top: auto;
    gap: 0;
  }
`;
const MenuIcon = styled.div`
  display: none;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  @media (max-width: 1000px) {
    display: block;
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
