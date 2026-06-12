import React from "react";
import { ClipLoader, CircleLoader, MoonLoader } from "react-spinners";
import styled from "styled-components";
const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-primary);
  `;
const LoaderText = styled.div`
   font-weight: 900;
   margin-top: 20px;
`
function Loader({ size = 100, color = `var(--color-primary)` }) {
  return (
    <LoaderContainer>
      <div>
        <CircleLoader color={color} size={size} />
        <LoaderText > ...درحال بارگذاری</LoaderText>
      </div>
    </LoaderContainer>
  );
}

export default Loader;
