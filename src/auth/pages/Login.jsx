import './Login.css';
export const Login = () => {
    return (
        <div className='container-login'>
            <div className='content-yellow'>
                <h1>TO-DO</h1>
                
                <input
                    type='text'
                    placeholder='Usuario'
                />
                <input
                    type='text'
                    placeholder='contraseña'
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
