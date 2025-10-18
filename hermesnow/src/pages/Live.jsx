import React from 'react';
import styled from 'styled-components';

const LiveNewsBox = styled.iframe`
  width:100%;
  height: 500px; 
  text-align: center;
  border: none;
  overflow: scroll;
`;

export default function Live() {
  return (
     <LiveNewsBox
      src='https://sepehrtv.ir/live/irinn'
      title="IRINN Live"
      allowFullScreen
      
    /> 
  );
}
