import React from "react";
import styled from "styled-components";
import FooterTitle from "../ui/footer/FooterTitle";
import FooterLinks from "../ui/footer/FooterLinks";
import FooterSearch from "../ui/footer/FooterSearch";
import CopyRight from "../ui/footer/CopyRight";
const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-info);
  padding: 30px 15px;
`;

const RowLinkSearch = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 20px;
`;
function FooterSection() {
  return (
    <FooterContainer>
      <FooterTitle />
      <RowLinkSearch>
        <FooterLinks />
      </RowLinkSearch>
      <FooterSearch />
      <CopyRight />
    </FooterContainer>
  );
}

export default FooterSection;
