import React from 'react'
import styled from 'styled-components'
const CopyRightBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--color-primary);
    position: absolute;
    bottom : 0;
    left: 0;
`
const Designer = styled.div`
    font-size: 25px;
    font-weight: 900;
    color: var(--color-info);

`
const CopyRightText = styled.div`
     font-size: 15px;
    font-weight: 800;
    text-decoration: underline;
    color: var(--color-neutral);
`
const ContactList = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;


`
const ContactLink =  styled.a`
    text-align: center;
    font-size: 20px;
    color: var(--color-neutral);
`
function CopyRight() {
  return (
    <CopyRightBox>
        <Designer>طراح : امید فولادوند </Designer>
        <CopyRightText>کلیه حقوق معنوی این سایت متعلق به امید فولادوند می باشد</CopyRightText>
        <ContactList>
          <ContactLink href='https://github.com/Omidfoladvand4'>اکانت گیت هاب</ContactLink>
          <div>شماره تماس </div>
          <ContactLink as='h2'>09395687472</ContactLink>
        </ContactList>
    </CopyRightBox>
  )
}

export default CopyRight