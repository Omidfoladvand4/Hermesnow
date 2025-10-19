import React from 'react'
import styled from 'styled-components'
import PageviewIcon from '@mui/icons-material/Pageview';
const SearchBox = styled.div`
    width: 100%;
    border-radius: 15px;
    display: flex;
    align-items: center;
     justify-content: center;
   background-color: var(--color-secondary);
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
`
const SearchInput = styled.input`
      width: 90%;
       padding: 15px 20px;
     background-color: var(--color-secondary)
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 15px;
`
function FooterSearch() {
  return (
      <SearchBox >
        <SearchInput placeholder='... برای جستجو اخبار' /> <Icon><PageviewIcon fontSize='large'/></Icon>
      </SearchBox>
  )
}

export default FooterSearch