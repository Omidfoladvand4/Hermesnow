
import React from 'react'
import styled from 'styled-components'
const TitleContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-right: 25px;
`
const TitleContent = styled.h1`
  font-size: 35px;
  font-weight: 900;
  color: var(--color-accent);
  border-bottom: 4px solid var(--color-accent);
`
function Title({titleName}) {
  return (
    <TitleContainer>
      <TitleContent>{titleName}</TitleContent>
    </TitleContainer>
  )
}

export default Title