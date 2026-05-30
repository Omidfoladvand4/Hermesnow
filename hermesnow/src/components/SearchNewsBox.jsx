import React, { useState } from 'react';
import styled from 'styled-components';

const SearchNewsBoxWrapper = styled.div`
    width: 100%;
    padding: 5px 10px;
    font-size: var(--font-size-sm);
    background: ${({ $backgroundColor }) => $backgroundColor || 'var(--color-info)'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
@media (max-width : 400px) {
  display: none;
}
`;

const SearchBoxInput = styled.input`
    width: 90%;
    height: 100%;
    background-color: inherit;
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    padding: 8px 12px;
    font-family: vazir;
    
    &:focus {
        outline: none;
        border-color: var(--color-accent);
    }
`;

const SearchBoxButton = styled.button`
    height: 100%;
    font-size: var(--font-size-md);
    padding: 8px 15px;
    border-radius: 10px;
    cursor: pointer;
    background: var(--color-accent);
    color: white;
    border: none;
    font-family: vazir;
    
    &:hover {
        background: #b36962;
    }
`;

function SearchNewsBox({ filterNewsHandler, $backgroundColor }) {
    const [searchValue, setSearchValue] = useState('');

    const handleFilterNews = () => {
        if (filterNewsHandler) {
            filterNewsHandler(searchValue);
        }
    };

    const handleEnterFilterNews = (e) => {
        setSearchValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleFilterNews();
        }
    };

    return (
        <SearchNewsBoxWrapper $backgroundColor={$backgroundColor}>
            <SearchBoxInput  
                value={searchValue} 
                placeholder='خبر مورد نظر را سرچ کنید' 
                onChange={handleEnterFilterNews}
                onKeyDown={handleKeyDown}
            />
            <SearchBoxButton onClick={handleFilterNews}>
                جستجو
            </SearchBoxButton>
        </SearchNewsBoxWrapper>
    );
}

export default SearchNewsBox;