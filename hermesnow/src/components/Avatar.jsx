import styled from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AvatarImage = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  object-fit: cover;
  border-radius: 50%;
`;

function Avatar({ src, size = 150, alt = "User Avatar" }) {
  if (!src) {
    return <AccountCircleIcon sx={{ fontSize: size }} />;
  }

  return (
    <AvatarImage
      src={src}
      alt={alt}
      size={size}
    />
  );
}

export default Avatar
