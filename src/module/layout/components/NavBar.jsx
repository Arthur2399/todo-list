import { Link } from 'react-router-dom';
import './NavBar.css';
import { ToggeMenu } from './ToggeMenu';
import { useState } from 'react';

export const NavBar = () => {

    const [isToogleMenu, setIsToogleMenu] = useState(false);


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
                <label >Alexandra Daddario</label>
                <img onClick={() => { setIsToogleMenu(!isToogleMenu) }}
                    src="https://www.emmys.com/sites/default/files/photos-article/alexandra-daddario-900x600.jpg" alt="foto" />
            </div>

            {

                isToogleMenu && <ToggeMenu />
            }
        </nav>
    )
}
