import './Login.css';

export const Login = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='input'>

                    <input 
                    type='text' 
                    placeholder='Usuario'
                    >
                    </input>
                    

                    <input
                    type='text'
                    placeholder='contraseña'
                    >
                    </input>

                    <button>
                        <span >
                            Login
                        </span>
                    </button>

                    

                </div>
            </div>


        </div>
    )
}
