import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const BackIcon = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;  
  background: var(--color-primary);
  color: var(--color-secondary);

`
function BackButton() {
    const navigate = useNavigate()
    const backHandle = () => {
     navigate(-1)
    }
  return (
    <BackIcon onClick={backHandle}>بازگشت<ArrowBackIosIcon /></BackIcon>
  )
}

export default BackButton