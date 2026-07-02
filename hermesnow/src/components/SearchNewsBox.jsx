import { useState } from "react";
import styled from "styled-components";

const SearchNewsBoxWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-size: var(--font-size-sm);
  background: ${({ $backgroundColor }) => $backgroundColor || "inhert"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SearchBoxInput = styled.input`
  width: 90%;
  height: 100%;
  background-color: var(--color-accent);
  color: var(--color-secondary);
  padding: 10px 12px;
  font-weight: 500;
  font-size: var(--font-size-md);
  font-family: sans-serif;
  transition: all 0.3s ease;
  position: relative;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

const SearchBoxButton = styled.button`
  height: 100%;
  font-size: var(--font-size-xl);
  padding: 6.5px 16px;
  cursor: pointer;
  font-weight: 600;
  background: var(--color-primary);
  color: white;
  border: none;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: white;
    color: var(--color-primary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    background: white;
    color: var(--color-primary);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function SearchNewsBox({ filterNewsHandler, $backgroundColor }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    const value = searchValue.trim();
    if (filterNewsHandler && value !== "") {
      filterNewsHandler(value);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setSearchValue('')
    }
  };

  return (
    <SearchNewsBoxWrapper $backgroundColor={$backgroundColor}>
      <SearchBoxInput
        value={searchValue}
        placeholder="خبر مورد نظر را سرچ کنید"
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <div></div>
      <SearchBoxButton onClick={handleSearch}
                       disabled={!searchValue.trim()}>جستجو</SearchBoxButton>
    </SearchNewsBoxWrapper>
  );
}

export default SearchNewsBox;
