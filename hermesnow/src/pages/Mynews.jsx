import {React , useState , useEffect} from 'react'
import { useNews }  from '../hooks/useGetNews'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import styled from 'styled-components'
import Title from '../components/Title'
import CategoryBox from '../components/CategoryBox'
import Loader from '../components/Loader'
import BackButton from '../components/BackButton'
import { gradientMove } from '../styles/animations'
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
const MyNewsWrraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`
const MyNewsBoxs = styled.div`
  width: 100%;
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const GuestBox = styled.div`
  width: 100vw;
  height: 80vh;
  position: blue;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-info));
  background-size: 400%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  justify-content: center;
  font-size: var(--font-size-md);
  animation: ${gradientMove} .8s  infinite alternate;
  z-index: 9999;
`
const YourNewsNavigationBox = styled.div`
  width: 100%;
  background: var(--color-primary);
  color: var(--color-info);
  font-size: var(--font-size-md);
  text-align: center;
  padding: 0.5rem;
`
function Mynews() {
  const [yourNews , setYourNews] = useState([])
  const {  news , Newsrefetch  , getNewsLoading  } = useNews()
  const { user } = useAuth()
  
  
  useEffect(()  => {

    if(news) {
   setYourNews(news.filter((item) =>  item.NewsSubject == user?.FavoritesTopic))  
   
     
    }
     
  }, [news])


  return (
    <MyNewsWrraper>
     {user ? 
        <> <Title font={'var(--font-size-md)'} titleName={`خبر های شما بر اساس علاقه مندی شما به موضوع :  ${user?.FavoritesTopic}`}/>

       <MyNewsBoxs>
             {!getNewsLoading ?   yourNews.map((item => {
     return    <CategoryBox key={item.id} news={item}/>
      })) : <Loader />}
       </MyNewsBoxs>
        <YourNewsNavigationBox>
          شما میتوانید برای تغییر علاقه مندی خود به تنظیمات رفته         <Link to={'/setting'}><SettingsInputCompositeIcon /> </Link> 

        </YourNewsNavigationBox>
       </>

      : 
      <GuestBox >
        <Link to={'/login'}>برای استفاده از بخش  ابتدا باید وارد شوید </Link> 
        <BackButton />

      </GuestBox>
      }
      

    </MyNewsWrraper>
  )
}

export default Mynews