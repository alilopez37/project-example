import {useContext} from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';

function PrivateRoute() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    return (user ? <Outlet /> : <Navigate to='/landing'/>) 
}

export default PrivateRoute;