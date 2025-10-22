
import React from 'react'
import styled from 'styled-components'
const TitleContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-right: 25px;
`
const TitleContent = styled.h1`
  font-size: ${({$font}) => $font || '35px' };
  font-weight: 900;
  color: ${({$color}) => $color || `var(--color-accent)`};
  border-bottom: 4px solid var(--color-accent);
`
function Title({titleName , color , font}) {
  return (
    <TitleContainer>
      <TitleContent $color = {color} $font ={font}>{titleName}</TitleContent>
    </TitleContainer>
    
  )
}

export default Title