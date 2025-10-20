import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
    width: ${({ $w }) => $w || '550px'};
    height: ${({ $h }) => $h || '150px'};
    border-radius: ${({ $borderRadius }) => $borderRadius || 'none'};
    object-fit: cover;
`
function ImageBox({ $src , $w , $h  , $borderRadius }) {
  return (
        <Image  src={$src} $w={$w} $h={$h} $borderRadius = {$borderRadius}/>
  )
}

export default ImageBox