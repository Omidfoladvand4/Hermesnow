import React, { useState } from 'react';
import styled from 'styled-components';

const SearchNewsBoxWrapper = styled.div`
    width: 100%;
    padding: 5px 10px;
    font-size: var(--font-size-sm);
    background: ${({ $backgroundColor }) => $backgroundColor || 'inhert'};
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
    background-color: var(--color-accent);
    color: var(--color-secondary);
    border-radius: 10px;
    padding: 10px 12px;
    font-weight: 500;
    font-size: var(--font-size-md);
    font-family: sans-serif;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
    }
`;

const SearchBoxButton = styled.button`
    height: 100%;
    font-size: var(--font-size-xl);
    padding: 6px 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    background: var(--color-primary);
    color: white;
    border: none;
    transition: all 0.3s ease;
    
    &:hover {
        background: white;
        color: var(--color-primary);

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