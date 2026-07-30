import React, { useState } from 'react';
import Loader from './Loader';
import CategoryBox from './CategoryBox';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
    width: 100%;
    height: max-content;
    max-height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 12px auto;
`

const NewsGrid = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
`

const PaginationControls =  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    padding: 10px 16px;
    margin-top: 16px;
    @media (max-width : 480px) {
        padding: 6px 8px;
    }
`
const PaginationControlsBtn = styled.button`
   width: 100px;
   padding: 16px 0;
   font-weight: 900;
   border-radius: 12px;
   font-size: var(--font-size-lg);
   cursor: pointer;
   background-color: var(--color-accent);
   color: var(--color-secondary);
   &:disabled{
    opacity: .5;
   }
   @media (max-width : 480px) {
    width: 80px;
   font-size: var(--font-size-md);
    
   }
`
const PageCount = styled.div`
     color: var(--color-primary);
     font-size: var(--font-size-xl);
     font-weight: 900;
     @media (max-width : 480px) {

       font-size: var(--font-size-lg);
        
     }
`
function Pagination({ newsList, getNewsLoading  , itemsPage = 6}) {
  const [page, setPage] = useState(1);
  const itemsPerPage = itemsPage; 

  if (getNewsLoading) {
    return <Loader />;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsList?.slice(startIndex, endIndex) || [];

  const totalPages = Math.ceil((newsList?.length || 0) / itemsPerPage);

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <PaginationWrapper>
      <NewsGrid>
        {currentNews.map((item) => (
          <CategoryBox key={item.id} news={item} />
        ))}
      </NewsGrid>

      {totalPages > 1 && (
        <PaginationControls >
          <PaginationControlsBtn onClick={() => goToPage(page - 1)} disabled={page === 1}>
            قبلی
          </PaginationControlsBtn>
          <PageCount>
            صفحه {page} از {totalPages}
          </PageCount>
          <PaginationControlsBtn onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
            بعدی
          </PaginationControlsBtn>
        </PaginationControls>
      )}
    </PaginationWrapper>
  );
}

export default Pagination;