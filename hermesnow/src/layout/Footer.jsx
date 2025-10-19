import React from 'react'
import styled from 'styled-components'
import FooterTitle from '../ui/footer/FooterTitle'
import FooterLinks from '../ui/footer/FooterLinks'
import FooterSearch from '../ui/footer/FooterSearch'
import Logo from '../components/Logo'
import CopyRight from '../ui/footer/CopyRight'
    const FooterContainer =  styled.footer`
         width: 100%;
        display: grid;
        grid-template-rows: auto auto auto;
        row-gap: 20px;
        justify-content: center;
        background:var(--color-info);
        color: var(--color-primary);
        padding: 30px 15px;
    `

    const RowLinkSearch = styled.div`
      max-width: 1240px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit , minmax(250px , 1fr));
      justify-items: center;
      align-items: center;
      gap: 20px;
    `
function FooterSection() {
  return (
    <FooterContainer>
            <FooterTitle />
           <RowLinkSearch>
             <FooterLinks />
            <Logo $w='100' $font='54px'/>
           </RowLinkSearch>
            <FooterSearch />
            < CopyRight />
    </FooterContainer>
  )
}

export default FooterSection