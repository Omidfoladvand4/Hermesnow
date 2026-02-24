import { Routes , Route ,  }  from 'react-router-dom'

import Account from './pages/Account'
import Category from './pages/Category' 
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import News from './pages/News'
import NewsEditor from './pages/NewsEditor'
import Setting from './pages/Setting'
import Topnews from './pages/Topnews'
import Mynews from './pages/Mynews'
import Dashborad from './pages/dashborad'
import Live from './pages/Live'
import Signup from './components/Signup'
import ProductInfo from './pages/ProductInfo'
import NotFoundPage from './pages/NotFoundPage'

export default function AppRoutes () {
    return (
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/your-news' element = {<Mynews />}/>
            <Route path='/news/:id' element = {<News />}/>
            <Route path='/news-editor' element = {<NewsEditor />}/>
            <Route path='/settings' element = {<Setting />}/>
            <Route path='/category/:subject' element = {<Category />}/>
            <Route path='/Account' element = {<ProtectedRoute>
                                                  <Account />
                                           </ProtectedRoute>}/>
            <Route path='/Top-news' element = {<Topnews />}/>
            <Route path='/dashboard' element ={<Dashborad />}  />
            <Route path='/Live-news' element ={<Live />}  />
            <Route path='/signup' element= {<Signup />} />
            <Route path='/product-info' element={<ProductInfo /> } />
            <Route path='*' element ={< NotFoundPage/>} />
        </Routes>
    )
}