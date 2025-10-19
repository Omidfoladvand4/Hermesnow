import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  color:  var(--color-info);
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  padding: 10px 18px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  `
;

function GridBox({ title }) {

  return (
    <Box >
      {title}
    </Box>
  )
}

export default GridBox;