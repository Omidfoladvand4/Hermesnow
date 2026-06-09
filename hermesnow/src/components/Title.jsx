
import React from 'react'
import styled from 'styled-components'
import {textGlow} from '../styles/animations'
const TitleContainer = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || 'start'};
  justify-content: center;
  margin-top: 5px;
  animation:  ${textGlow} 0.3s linear;
`
const TitleContent = styled.h1`
  font-size: ${({$font}) => $font || '35px' };
  font-weight: 900;
  color: ${({$color}) => $color || `var(--color-accent)`};
  border-bottom: 4px solid var(--color-accent);
`
function Title({titleName , color , font , align}) {
  return (
    <TitleContainer $align= {align}>
      <TitleContent $color = {color} $font ={font}>{titleName}</TitleContent>
    </TitleContainer>
    
  )
}

export default Title