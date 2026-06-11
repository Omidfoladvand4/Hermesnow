import React from "react";
import styled from "styled-components";
const MenuItemContainer = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  color: var(--color-info);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
function MenuItem({ children }) {
  return <MenuItemContainer>{children}</MenuItemContainer>;
}

export default MenuItem;
