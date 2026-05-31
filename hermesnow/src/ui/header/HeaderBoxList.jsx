import React from 'react'
import styled from 'styled-components'
import GridBox from './HeaderBox'
import { Link } from 'react-router-dom';
 const boxData = [
  { title: 'اقتصاد'},
  { title: 'سیاست'},
  { title: 'محیط زیست'},
  { title: 'هنر'},
  { title: 'دانش و فناوری'},
  { title: 'جامعه' },
  { title: 'بین الملل'},
  { title: 'سیاست'},
  { title: 'محیط زیست'},
  { title: 'هنر'},
  { title: 'سیاست'},
  { title: 'محیط زیست'},

];
const GridContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns:  1fr 75px  120px 120px;
  grid-template-rows: 1fr 60px 1fr ; 
  gap: 20px;
  padding: 0.5rem;
  margin-top: 1.5rem;

`
function BoxesGrid() {
  return (
    <GridContainer>
      {boxData.map((item, index) => (
        <GridBox  key={index}  >
          <Link to={`/category/${item.title}`}>{item.title}</Link>
        </GridBox>
         
      ))}
    </GridContainer>
  )
}

export default BoxesGrid;