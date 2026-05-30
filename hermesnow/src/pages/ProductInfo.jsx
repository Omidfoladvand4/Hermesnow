import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import ImageBox from '../components/ImageBox'
import {fadeIn ,slideInStagger ,fadeInUp ,scaleIn ,rotateIn }  from '../styles/animations'

const ProductInfoContainer = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr 1fr;
    background: url('./public/images/HermesNowBannar.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    animation: ${fadeIn} 0.3s linear;
    
    @media (max-width : 768px) {
      display: flex;
      flex-wrap: wrap;
    }
`
const SummarySection = styled.div`
   grid-column: 1/3;
   grid-row: 1/3;
   display: flex;
   align-items: start;
   flex-direction: column;
   gap: 10px;
   border-radius: 12px;
   backdrop-filter: blur(25px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin: 15px 10px;
    padding: 10px 15px;
    background: linear-gradient(135deg , rgba(255, 255 , 255 , 0.1) , blue , gray);
    color: var(--color-secondary);
    animation: ${fadeInUp} 0.3s linear;
    animation-delay: .6s;
 @media (max-width: 400px) {
     width: 100%;
     flex-wrap: wrap;
 }

`
const TecItems = styled.ul`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
   @media (max-width : 400px) {
        height: 150px;
   }
`

const TecItem = styled.li`
  
`
const SummaryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductDecription = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  font-style: italic;
`
const ToolsWrapper = styled.div`
width: 100%;
display: flex;
align-items: start;
justify-content: space-around;
margin-top: 15px;
padding: 10px 15px;
    animation: ${scaleIn} 0.3s linear;
    animation-delay: .9s;
  
  @media (max-width : 400px) {
     flex-direction: column;
     align-items: center;
  }
`
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
 box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
 @media (max-width : 400px) {
  width: 80%;
 }
`
const ProducUserExperainseSectiontData = styled.div` 
   
   grid-column: 3/5; 
   grid-row: 1 / -1;
   gap: 10px;
   border-radius: 12px;
   backdrop-filter: blur(25px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin: 15px 10px;
    padding: 10px 15px;
    background: linear-gradient(135deg , rgba(255, 255 , 255 , 0.1) , green , black);
    color: var(--color-secondary);
`
const UserExperainseSectionWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 18px;
 box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    animation: ${slideInStagger} 0.3s linear;



`
const LoginGuideWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   gap: 10px;
   margin-top: 15px;
   font-size: var(--font-size-xs);
`
const FeatureSection = styled.div`
   grid-column: 1/3;
   grid-row: 3/5;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-wrap: wrap;
   gap: 10px;
   border-radius: 12px;
   backdrop-filter: blur(25px);
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    margin: 15px 10px;
    padding: 10px 15px;
    background: linear-gradient(135deg , rgba(255, 255 , 255 , 0.1) , yellow , black);
    color: var(--color-secondary);
`
const FeatureBox = styled.div`
  width: 25%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
  gap: 10px;
  padding: 15px;
  background-color: var(--color-primary);
  box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
    animation: ${rotateIn} 0.3s linear alternate;
    animation-delay : 0.3s ;
    font-size: var(--font-size-xs);
  cursor: pointer;
  &:hover{
    background-color: transparent;
    transform: scale(1.1);
    font-weight: bolder;
    color: var(--color-primary);
  }
  @media (max-width : 400px) {
       height: 60px;
  }

`
const  developerData = {
  "name": "امید فولادوند",
  "role": "Front-End Developer",
  "about": "توسعه‌دهنده فرانت‌اند با تمرکز بر ایجاد رابط‌های کاربری مدرن و تجربه‌های کاربری بهینه",
  "techStack": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  "currentProject": "در حال توسعه اپلیکیشن‌های تحت وب با معماری مدرن و قابلیت‌های real-time"
}

 const ProductData  = {
  "project": {
    "name": " وبسایت خبری با پنل مدیریت کاربران",
    "description": "سیستم مدیریت کاربران با قابلیت‌های کامل CRUD و رابط کاربری پیشرفته",
    "version": "1.0.0"
  },
  "technologies": {
    "frontend": ["React", "Styled-Components", "Material-UI"],
    "backend": ["Supabase", "PostgreSQL"],
    "authentication": ["Supabase Auth"]
  },
  "features": [
    "نمایش لیست کاربران",
    "جستجوی پیشرفته",
    "ارتقا و کاهش سطح کاربران", 
    "حذف کاربران",
    "رابط کاربری ریسپانسیو",
    'حذف و اضافه کردن خبر',
    'نمایش خبر بر اساس سلیقه شما',
    "قابلیت ثبت نام"  ,
    "تبدیل متن به صوت در خبرهای انگلیسی",
    "قابلیت شیر کردن اخبار",
    "تبدیل خبر به فایل پی دی اف"
  ]
}
function ProductInfo() {
  return (
    <ProductInfoContainer>
          <SummarySection >
             <Title titleName='خلاصه' font='var(--font-size-xl)'/>
             
             <SummaryWrapper >
                <div>
                  <h4>{ProductData.project.name}</h4>
                <ProductDecription>{ProductData.project.description} نسخه : {ProductData.project.version}</ProductDecription>
                </div>

                 <ToolsWrapper>
                   <Wrapper>
                  <h4>Front end</h4>
                   <TecItems>
            {ProductData.technologies.frontend.map(item => (
                 <TecItem key={item}>{item}</TecItem>
  ))}
</TecItems>
                </Wrapper>
                              <Wrapper>
                  <h4>Back end</h4>
                   <TecItems>
            {ProductData.technologies.backend.map(item => (
                 <TecItem key={item}>{item}</TecItem>
  ))}
</TecItems>
                </Wrapper>
                              <Wrapper>
                  <h4>Authentication</h4>
                   <TecItems>
            {ProductData.technologies.authentication.map(item => (
                 <TecItem key={item}>{item}</TecItem>
  ))}
</TecItems>
                </Wrapper>
                 </ToolsWrapper>
             </SummaryWrapper>
          </SummarySection>
          <ProducUserExperainseSectiontData >
               <Title titleName='برای تجربه کاربری بهتر بهتره' font='var(--font-size-xl)' />

               <UserExperainseSectionWrapper >
                <h4>در صفحه ورود</h4>
                <LoginGuideWrapper >
                  <ul style={{background : 'var(--color-primary) ' , padding : '20px 30px' , width : '50%'}}>
                    <li><h5>نام کاربری :</h5> <p>Omid Foladvand</p></li>
                    <li><h5> رمز عبور :</h5> <p>1414Omid1414</p></li>
                    <li>باید باشه</li>
                  </ul>
                  <ImageBox $src='./public/images/LoginImage.png' $w='50%' $h='250px'/>
                </LoginGuideWrapper>
               </UserExperainseSectionWrapper>
          </ProducUserExperainseSectiontData>
          <FeatureSection >
            <Title titleName='قابلیت ها '  font='var(--font-size-xl)'/>  <br />
            {ProductData.features.map(feature => {
              return <FeatureBox>{feature}</FeatureBox>
            })}
          </FeatureSection>
    </ProductInfoContainer>
  )
}

export default ProductInfo