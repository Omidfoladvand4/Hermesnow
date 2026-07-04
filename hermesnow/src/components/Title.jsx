import React from "react";
import styled from "styled-components";
import { textGlow } from "../styles/animations";
const StyledTitle = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: center;
  margin-top: 5px;
  animation: ${textGlow} 0.3s linear;
`;
const StyledHeading = styled.h1`
  font-size: ${({ $font }) => $font};
  font-weight: 900;
  color: ${({ $color }) => $color};
  border-bottom: 4px solid var(--color-accent);
`;
function Title({
  titleName,
  color = "var(--color-accent)",
  font = "35px",
  align = "flex-start",
}) {
  return (
    <StyledTitle $align={align}>
      <StyledHeading $color={color} $font={font}>
        {titleName}
      </StyledHeading>
    </StyledTitle>
  );
}

export default Title;
