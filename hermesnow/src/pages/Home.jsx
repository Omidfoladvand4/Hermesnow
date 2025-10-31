import React from 'react'
import Header from '../layout/Header'
import CategoryBoxs from '../components/CategoryBoxs'
import { fakeNewsData } from '../utils/fadeData'
const subjects = [  'سلامت' ,'باستان‌شناسی' , 'فرهنگی' ,  'محیط زیست' , 'گردشگری'  ,'اقتصاد', 'مذهبی' ,  'تکنولوژی'   , 'آموزش' , 'صنعت' , 'کشاورزی']
function Home() {
  return (
    <div>
       <Header />
       <>
         {subjects.map((subject  , index) => {
       return  <CategoryBoxs datas={fakeNewsData} key={`${index} - ${subject}`}  subject={subject}/>
        
      })}
       </>
    </div>
  )
}
export default Home