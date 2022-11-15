import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Store } from '../redux/Store'
import Header from './Header'
import Footer from './Footer'
import UserContext from '../context/UserContext'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Analytics from '../pages/Analytics'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'
import Redux from '../pages/Redux'
import NotFound from '../pages/NotFound'


function App() {
    const [user, setUser] = useState(null)

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user,setUser}}>
                <Provider store={Store}>
                    <Header />
                    <Routes>
                        <Route index element={<Landing />}/>
                        <Route path='landing' element={<Landing/>} />
                        <Route element={<PrivateRoute />}>
                            <Route path='/home' element={<Home />} />
                            <Route path='/dashboard' element={<Dashboard/>}/>
                            <Route path='/analytics' element={<Analytics />} />
                            <Route path='/product/:id' element={<Product />} />
                            <Route path='/redux' element={<Redux />} />

                        </Route>
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                    <Footer />
                </Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App


function Private({children}){
    const {user} = useContext(UserContext)

    return (user ? children : <Navigate to='/landing'/>)

}