import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const StyledBackButton = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  background: var(--color-primary);
  color: var(--color-secondary);
  font-size: var(--font-size-md);
`;
function  GoBackButton() {
  const navigate = useNavigate();
  const backHandle = () => {
    navigate(-1);
  };
  return (
    <StyledBackButton onClick={backHandle}>
      بازگشت
      <ArrowBackIosIcon />
    </StyledBackButton>
  );
}

export default GoBackButton;
