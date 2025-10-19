import React from 'react'
import styled from 'styled-components'
import WhatshotIcon from '@mui/icons-material/Whatshot';
    const FooterTitleContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 24px;
        color: var(--color-primary);
        font-weight: 600;
        padding: 5px;
        border-bottom: 1px solid var(--color-neutral);
    `
function FooterTitle() {
  return (
    <FooterTitleContainer>
         موضوعات داغ  <div><WhatshotIcon  /></div>
    </FooterTitleContainer>
  )
}

export default FooterTitle