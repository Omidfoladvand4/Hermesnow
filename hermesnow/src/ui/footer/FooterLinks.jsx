import React from 'react'
import styled from 'styled-components'
const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`
const ListItem = styled.li`
  color: var(--color-primary);
  background: var(--color-neutral);
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 15px;
  cursor: pointer;  
   backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.4),
    0 12px 24px rgba(0, 0, 0, 0.3),
    0 16px 48px rgba(0, 0, 0, 0.25);

      transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.45),
      0 16px 32px rgba(0, 0, 0, 0.35),
      0 20px 60px rgba(0, 0, 0, 0.3);
  }
`
function FooterLinks() {
  return (
    <List>
         <ListItem>اقتصاد</ListItem>
         <ListItem>آمریکا</ListItem>
         <ListItem>جنگ غزه</ListItem>
         <ListItem>جام جهانی فوتبال</ListItem>
         <ListItem>اخبار ایران وجهان</ListItem>
    </List>
  )
}

export default FooterLinks