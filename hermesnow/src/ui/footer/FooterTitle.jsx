import React from 'react'
import styled from 'styled-components'
import WhatshotIcon from '@mui/icons-material/Whatshot';
    const FooterTitleContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: var(--font-size-md);
        color: var(--color-info);
        font-weight: 600;
        padding: 5px;
        border-bottom: 1px solid var(--color-info);
    `
function FooterTitle() {
  return (
    <FooterTitleContainer>
         موضوعات داغ  <div><WhatshotIcon  /></div>
    </FooterTitleContainer>
  )
}

export default FooterTitle