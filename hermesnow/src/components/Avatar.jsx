import styled from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const AvatarContainer = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`
function Avatar({AvatarSrc}) {
    if(!AvatarSrc) return <div><AccountCircleIcon fontSize="large" /></div>
    return (
        <AvatarContainer src={AvatarSrc}>
            
        </AvatarContainer>
    )
}

export default Avatar
