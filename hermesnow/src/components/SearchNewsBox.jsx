import {React , useState} from 'react'
import styled from 'styled-components'
    const SearchNewsBoxWrapper = styled.div`
        width: 100%;
        padding: 5px 10px;
        font-size: var(--font-size-sm);
        background: var(--color-info);
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const SearchBoxInput = styled.input`
        width: 90%;
        height: 100%;
        background-color: inherit;
        border: 1px solid var(--color-primary);
        
    `
    const SearchBoxButton = styled.button`
        height: 100%;
        font-size: var(--font-size-md);
        padding: 5px 15px;
        border-radius: 10px;
        cursor: pointer;
    `

function SearchNewsBox({filterNewsHandler}) {
    const [searchValue , setSearchValue] = useState('')
    const handleFilterNews = () => {
        filterNewsHandler(searchValue)
        
    }
    const handleEnterFilterNews = (e) => {
       setSearchValue(e.target.value)
        filterNewsHandler(searchValue)
        }
    return (
    <SearchNewsBoxWrapper>
          <SearchBoxInput  value={searchValue} placeholder='خبر مورد نظر را سرچ کنید' onChange={handleEnterFilterNews}/>
          <SearchBoxButton  onClick={handleFilterNews}>جستجو</SearchBoxButton>
    </SearchNewsBoxWrapper>
  )
}

export default SearchNewsBox