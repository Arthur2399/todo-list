import './Login.css';
export const Login = () => {
    return (
        <div className='container-login'>
            <div className='content-yellow'>
                <input
                    type='text'
                    placeholder='Usuario'
                />
                <input
                    type='text'
                    placeholder='contraseña'
                />
                <button>
                    <span >
                        Login
                    </span>
                </button>
            </div>
        </div>
    )
}
