import { Link } from 'react-router-dom';
import './Login.css';
import { login } from '../../store/auth/slice/authSlice';
import { useAuthStore } from '../../store/auth/hooks/useAuthStore';



export const Login = () => {

    const { startLogin } = useAuthStore();

    return (
        <div className='container-login'>
            <div className='content-yellow'>
                <h1>TO-DO  | Organiza tu día</h1>
                <input
                    type='text'
                    placeholder='Usuario'
                />
                <input
                    type='text'
                    placeholder='Contraseña'
                />
                <button type='button' id='login-button' onClick={startLogin} >

                    <span >
                        Login
                    </span>
                </button>
                <Link to="/auth/register">¿No estas registrado?</Link>
            </div>
        </div>
    )
}
