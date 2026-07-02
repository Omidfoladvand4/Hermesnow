import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`;

const Header = styled.div`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

const Title = styled.div`
  font-size: var(--font-size-md);
  font-weight: 900;
  color: white;
`;

const List = styled.div`
  width: 100%;
`;

function SidebarSection({ title, icon, children }) {
  return (
    <SectionContainer>
      <Header>
        <Title>{title}</Title>
        {icon}
      </Header>

      <List>{children}</List>
    </SectionContainer>
  );
}

export default SidebarSection;