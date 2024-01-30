import './Register.css'

export const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-content'>
                <h1>REGISTRO</h1>
                <div className='register-content-items'>
                    <input type="text" placeholder='Nombre'/>
                    <input type="text" placeholder='Apellido'/>
                    <input type="email" placeholder='Correo'/>
                    <input type="password" placeholder='Contraseña'/>
                    <input type="password" placeholder='Repíta la contraseña'/>
                    <button>Registrarse</button>
                </div>
            </div>
        </div>
    )
}
