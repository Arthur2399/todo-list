import './Login.css';
export const Login = () => {
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

                <button type='button' id='login-button'>
                    <span >
                        Login
                    </span>
                </button>
            </div>
        </div>
    )
}
