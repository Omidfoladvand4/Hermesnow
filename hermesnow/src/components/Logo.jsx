import React from 'react'
import  styled  from 'styled-components'
     const LogoContainer = styled.div`
         width: ${({ $w }) => $w || '20%'};
         align-items: end;
         text-align: center;
         color: var(--color-secondary);
         overflow: hidden;
         
         `
    const LogoText = styled.div`
          font-weight: 900;
          font-size: ${({ $font }) => $font || '28px'};;
          transition: color 0.3s ease-in;
          animation:  animate 1s infinite;
        @keyframes animate {
          form {
             transform: scale(1);
             color: var(--color-secondary);
             opacity: 1;
          }
          to{
             transform: scale(1.5);
              color: var(--color-info);
              opacity: 0.8;

          }
        }
    `
function LogoTextContainer({$font}) {
    return (
        <LogoText $font = {$font}>HERMESNOW</LogoText>
    )
}
function Logo({ $w  , $font}) {
  return (
    <LogoContainer $w={$w}><LogoTextContainer $font={$font} /></LogoContainer>
  )
}

export default Logo