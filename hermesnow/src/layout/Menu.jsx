import React from "react";
import styled from "styled-components";
import AdminMenu from "../ui/menu/AdminMenu";
import UserMenu from "../ui/menu/UserMenu";
import { useAuth } from "../contexts/AuthContext";
const MenuContainer = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;

  @media (max-width : 1000px) {
    flex-direction: column;
    bottom: 0;
    top: auto;
    gap: 0;
    justify-content: center;
  }

`
function Menu() {
   const { user } = useAuth()
  return (
    <MenuContainer>
      <UserMenu />
     {(user?.IsAdmin || user?.IsMainAdmin) && (
        <AdminMenu />
      )}
    </MenuContainer>
  );
}

export default Menu;
