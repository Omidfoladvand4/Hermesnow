import React, { useState } from "react";
import styled from "styled-components";
import TopMenu from "../ui/menu/TopMenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  @media (max-width: 400px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
`;
function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <MenuContainer>
      <div
        style={{ padding: " 0px 15px" }}
        onClick={() => setIsOpenMenu((item) => !item)}>
        {!isOpenMenu ? (
          <MenuIcon fontSize="large" sx={{ color: "var(--color-info)" }} />
        ) : (
          <CloseIcon fontSize="large" sx={{ color: "var(--color-info)" }} />
        )}
      </div>
      {isOpenMenu && <TopMenu />}
    </MenuContainer>
  );
}

export default Menu;
