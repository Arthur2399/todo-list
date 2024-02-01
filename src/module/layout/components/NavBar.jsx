import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className='navBar-container'>
            <ul>
                <Link to="/">
                    <li>
                        Inicio
                    </li>
                </Link>
                <Link to="/to-do">
                    <li>
                        TODO
                    </li>
                </Link>
                <Link to="/progress">
                    <li>
                        Progreso
                    </li>
                </Link>
            </ul>
            <div className='navBar-container-profile'>
                <label >Arthur Chavez</label>
                <img src="https://www.emmys.com/sites/default/files/photos-article/alexandra-daddario-900x600.jpg" alt="foto" />
            </div>
        </nav>
    )
}
