import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.li`
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-info);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 2px;
  }

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
  }
`;

function MenuItem({ children }) {
  return (
    <StyledMenuItem>
      {children}
    </StyledMenuItem>
  );
}

export default React.memo(MenuItem);