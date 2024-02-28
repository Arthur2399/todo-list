import { Link } from 'react-router-dom';
import './NavBar.css';
import { ToggeMenu } from './ToggeMenu';
import { useState } from 'react';
import { useAuthStore } from '../../../store/auth/hooks/useAuthStore';

export const NavBar = () => {

    const [isToogleMenu, setIsToogleMenu] = useState(false);

    const { user } = useAuthStore();

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
                <label >{`${user.name} ${user.lastName}`}</label>
                <img onClick={() => { setIsToogleMenu(!isToogleMenu) }}
                    src="https://www.emmys.com/sites/default/files/photos-article/alexandra-daddario-900x600.jpg" alt="foto" />
            </div>

            {

                isToogleMenu && <ToggeMenu />
            }
        </nav>
    )
}
