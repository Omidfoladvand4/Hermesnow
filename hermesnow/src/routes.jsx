import { Routes , Route }  from 'react-router-dom'

import Account from './pages/Account'
import Category from './pages/Category' 

import Home from './pages/Home'
import Login from './pages/Login'
import News from './pages/News'
import NewsEditor from './pages/NewsEditor'
import Setting from './pages/Setting'
import Topnews from './pages/Topnews'
import Mynews from './pages/Mynews'
import Dashborad from './pages/dashborad'
import AboutUs from './pages/AboutUs'
import Live from './pages/Live'

export default function AppRoutes () {
    return (
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/your-news' element = {<Mynews />}/>
            <Route path='/news-editor' element = {<NewsEditor />}/>
            <Route path='/settings' element = {<Setting />}/>
            <Route path='/category' element = {<Category />}/>
            <Route path='/Account' element = {<Account />}/>
            <Route path='/Top-news' element = {<Topnews />}/>
            <Route path='/dashboard' element ={<Dashborad />} ></Route>
            <Route path='/about-us' element ={<AboutUs />} ></Route>
            <Route path='/Live-news' element ={<Live />} ></Route>
        </Routes>
    )
}