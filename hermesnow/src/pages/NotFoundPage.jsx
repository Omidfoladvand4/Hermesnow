import React from 'react'
import styled from 'styled-components'
const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient( 165deg , #ffffff  , #4e4e4e , #000000);
    backdrop-filter: blur(30px);
    position: fixed;
    top: 0;
    z-index: 98;
`
const TitlePage = styled.div`
    font-size: 400%;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-clip: text;
    color: transparent;
    font-weight: 900;
    font-family: cursive;
    animation:  textAnimate 2.5s  alternate infinite;
    @keyframes textAnimate {
        0% {
             background: linear-gradient(45deg,  #45b7d1, #4ecdc4, #ff6b6b );
             background-clip: text;
        }
     60%{
        opacity: 0;
   }
   99%{
    opacity: .7;
   }
        100%{
              transform: scale(1.8);
      }
    }

`
function NotFoundPage() {
  return (
   <>
   <Overlay ><TitlePage>Page Not Found :(</TitlePage></Overlay>
   </>
  )
}

export default NotFoundPage