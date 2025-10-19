import React from 'react'
import styled from 'styled-components'
import WhatshotIcon from '@mui/icons-material/Whatshot';
    const FooterTitleContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: var(--color-primary);
        font-weight: 600;
    `
function FooterTitle() {
  return (
    <FooterTitleContainer>
         موضوعات داغ  <div><WhatshotIcon  /></div>
    </FooterTitleContainer>
  )
}

export default FooterTitle