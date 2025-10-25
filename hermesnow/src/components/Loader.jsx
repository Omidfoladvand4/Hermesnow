import React from 'react'
import { ClipLoader, CircleLoader, MoonLoader } from 'react-spinners';
import styled from 'styled-components';
const LoaderContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
function Loader({ size = 100 , color = `var(--color-info)` }) {
  return (
 <LoaderContainer >
     <div>
         <CircleLoader color={color} size={size} />
      <div> ...درحال بارگذاری</div>
     </div>
    </LoaderContainer>
  )
}

export default Loader