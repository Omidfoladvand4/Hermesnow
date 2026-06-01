
import styled  from 'styled-components';
import  ImageBox from '../../components/ImageBox'
import bannerImage from '../../assets/HermesNowBannar1.jpg'
const Bannar = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: var(--color-accent);
    position: relative;
    @media (max-width : 768px){
      width: 100%;
      flex-direction: row;
    }
    `

const BannarContent = styled.div`
    font-size: var(--font-size-xl);
    font-weight: 900;
    line-height: 1.9;
    padding: 10px 30px;
    color: var(--color-secondary);
    flex-wrap: nowrap;
    
`
const BannerImage = styled.div`
  width: 100%;
  height: 50%;
  background: url(${bannerImage});
  background-size: cover;
  background-position: center;
     @media (max-width : 768px){
      width: 50%;
    }
`

function HeaderBannar() {

  return (
    <Bannar >
    <BannarContent>  – هر لحظه، هر خبر، سریع و 
خبرهایی که مهم‌اند، بدون تأخیر به دستت می‌رسند.
از تحولات جهانی تا تازه‌ترین اخبار محلی، همه را در یک نگاه ببین.</BannarContent>
     
     <BannerImage />
  </Bannar>
  )
}

export default HeaderBannar