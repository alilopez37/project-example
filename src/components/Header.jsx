import { useContext } from 'react';
import Swal from 'sweetalert2'  
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import logo from '../assets/imgs/logo.svg'
import '../assets/styles/header.css'

function Header() {
    const {user, setUser} = useContext(UserContext)

    const handleClickLogin = () => {
        // Enviar al formulario de login
        setUser({
            id:1,
            user:"alilopez",
            rol:['admin']
        })
        Swal.fire(
            'Login succeeded!',
            'Bienvenido al sistema',
            'success'
          )
    }

    const handleClickLogout = () => {
        // Enviar al formulario de login
        setUser(null)
    }


    return (
        <header>
            <div className="header--logo-title">
                <img src={logo} alt="Logo" />
                <h1>React + React-router</h1>
            </div>
            <div className="header--nav">
                <nav>
                    <ul>
                        <li>
                            <Link className='item-menu' to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link className='item-menu' to='/dashboard'>Dashboard</Link>
                        </li>
                        <li >
                            <Link className='item-menu' to='/analytics'>Analytics</Link>
                        </li>
                        <li>
                            {
                                user ?
                                    (<span className='item-menu' onClick={handleClickLogout}>Log out</span>)
                                :   (<span className='item-menu' onClick={handleClickLogin}>Log in</span>)
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
      );
}

export default Header;