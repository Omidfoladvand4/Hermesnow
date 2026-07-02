import React from "react";
import { CircleLoader } from "react-spinners";
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
const LoaderContent  = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const LoaderText = styled.div`
   font-weight: 900;
   margin-top: 20px;
`
function Loader({ size = 100, color = 'var(--color-primary) ' , text = 'درحال بارگذاری ...'}) {
  return (
    <LoaderContainer>
      <LoaderContent>
        <CircleLoader color={color} size={size} />
        <LoaderText > {text}  </LoaderText>
      </LoaderContent>
    </LoaderContainer>
  );
}

export default Loader;
