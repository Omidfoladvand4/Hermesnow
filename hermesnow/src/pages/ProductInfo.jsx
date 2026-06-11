import React from "react";
import styled from "styled-components";
import ImageBox from "../components/ImageBox";
import loginImage from "../assets/LoginImage.png";
import {
  fadeIn,
  slideInStagger,
  fadeInUp,
  scaleIn,
  rotateIn,
} from "../styles/animations";

const ProductInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  background-attachment: fixed;
  animation: ${fadeIn} 0.3s linear;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const SummarySection = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  margin: 15px 10px;
  padding: 10px 15px;
  background-color: var(--color-accent);
  color: var(--color-secondary);
  animation: ${fadeInUp} 0.3s linear;
  animation-delay: 0.6s;
  @media (max-width: 400px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
const TecItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 400px) {
    height: 150px;
  }
`;

const TecItem = styled.li``;
const SummaryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  line-height: 1.8;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductDecription = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  font-weight: 700;
  font-style: italic;
`;
const Title = styled.h4`
  font-size: var(--font-size-xxl);
  color: var(--color-primary);
  margin-bottom: 10px;
`;
const ToolsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  padding: 10px 15px;
  color: var(--color-info);
  font-weight: 800;
  animation: ${scaleIn} 0.3s linear;
  animation-delay: 0.9s;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px 15px;
  text-align: start;
  border-radius: 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 400px) {
    width: 80%;
  }
`;
const ProducUserExperainseSectiontData = styled.div`
  grid-row: 1 /3;
  grid-column: 5 /3;
  gap: 10px;
  border-radius: 12px;
  background-color: var(--color-accent);
  margin: 15px 10px;
  padding: 10px 15px;
  color: var(--color-secondary);
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const UserExperainseSectionWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 18px;
  animation: ${slideInStagger} 0.3s linear;

  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const LoginGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 15px;
  font-size: var(--font-size-xxl);
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
const LoginGuideBox = styled.ul`
  width: 50%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
const UserExperainseSectionImage = styled.div`
  width: 50%;
  height: 250px;
  background: url(${loginImage});
  background-position: center;
  object-fit: cover;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const FeatureSection = styled.div`
  grid-column: -1/1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 12px;
  background-color: var(--color-accent);

  margin: 15px 10px;
  padding: 10px 15px;
  color: var(--color-secondary);
  font-weight: 900;
`;
const FeatureBox = styled.div`
  width: 25%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
  animation: ${rotateIn} 0.3s linear alternate;
  animation-delay: 0.3s;
  font-size: var(--font-size-xl);
  cursor: pointer;
  &:hover {
    background-color: transparent;
    transform: scale(1.1);
    font-weight: bolder;
    color: var(--color-primary);
  }
  @media (max-width: 400px) {
    width: 100%;
    font-size: var(--font-size-xl);
    padding: 8px;
    height: 10vh;
  }
`;
const developerData = {
  name: "امید فولادوند",
  role: "Front-End Developer",
  about:
    "توسعه‌دهنده فرانت‌اند با تمرکز بر ایجاد رابط‌های کاربری مدرن و تجربه‌های کاربری بهینه",
  techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  currentProject:
    "در حال توسعه اپلیکیشن‌های تحت وب با معماری مدرن و قابلیت‌های real-time",
};

const ProductData = {
  project: {
    name: " وبسایت خبری با پنل مدیریت کاربران",
    description:
      "سیستم مدیریت کاربران با قابلیت‌های کامل CRUD و رابط کاربری پیشرفته",
    version: "1.0.0",
  },
  technologies: {
    frontend: ["React", "Styled-Components", "Material-UI"],
    backend: ["Supabase", "PostgreSQL"],
    authentication: ["Supabase Auth"],
  },
  features: [
    "نمایش لیست کاربران",
    "جستجوی پیشرفته",
    "ارتقا و کاهش سطح کاربران",
    "حذف کاربران",
    "رابط کاربری ریسپانسیو",
    "حذف و اضافه کردن خبر",
    "نمایش خبر بر اساس سلیقه شما",
    "قابلیت ثبت نام",
    "قابلیت شیر کردن اخبار",
  ],
};
function ProductInfo() {
  return (
    <ProductInfoContainer>
      <SummarySection>
        <SummaryWrapper>
          <div>
            <Title>{ProductData.project.name}</Title>
            <ProductDecription>
              {ProductData.project.description} نسخه :{" "}
              {ProductData.project.version}
            </ProductDecription>
          </div>

          <ToolsWrapper>
            <Wrapper>
              <Title>Front end</Title>
              <TecItems>
                {ProductData.technologies.frontend.map((item) => (
                  <TecItem key={item}>{item}</TecItem>
                ))}
              </TecItems>
            </Wrapper>
            <Wrapper>
              <Title>Back end</Title>
              <TecItems>
                {ProductData.technologies.backend.map((item) => (
                  <TecItem key={item}>{item}</TecItem>
                ))}
              </TecItems>
            </Wrapper>
            <Wrapper>
              <Title>Authentication</Title>
              <TecItems>
                {ProductData.technologies.authentication.map((item) => (
                  <TecItem key={item}>{item}</TecItem>
                ))}
              </TecItems>
            </Wrapper>
          </ToolsWrapper>
        </SummaryWrapper>
      </SummarySection>
      <ProducUserExperainseSectiontData>
        <UserExperainseSectionWrapper>
          <Title>در صفحه ورود</Title>
          <LoginGuideWrapper>
            <LoginGuideBox>
              <li>
                <div>نام کاربری :</div> <div>Omid Foladvand</div>
              </li>
              <li>
                <div> رمز عبور :</div> <div>1414Omid1414</div>
              </li>
              <li>باید باشه</li>
            </LoginGuideBox>
            <UserExperainseSectionImage />
          </LoginGuideWrapper>
        </UserExperainseSectionWrapper>
      </ProducUserExperainseSectiontData>
      <FeatureSection>
        {ProductData.features.map((feature) => {
          return <FeatureBox>{feature}</FeatureBox>;
        })}
      </FeatureSection>
    </ProductInfoContainer>
  );
}

export default ProductInfo;
