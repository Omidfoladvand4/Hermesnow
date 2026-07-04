import styled from "styled-components";
import GoBackButton from "../components/GoBackButton";


const Container = styled.main`
  position: fixed;
  inset: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  background: linear-gradient(165deg, #ffffff, #4e4e4e, #000000);
  backdrop-filter: blur(30px);
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;

  font-size: var(--font-size-xxl);
  font-weight: 900;
  font-family: cursive;

`;

function NotFoundPage() {
  return (
    <Container>
      <Title>۴۰۴ | صفحه مورد نظر پیدا نشد</Title>

      <GoBackButton />
    </Container>
  );
}

export default NotFoundPage;