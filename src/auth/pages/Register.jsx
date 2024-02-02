import { Link } from 'react-router-dom'
import *as Yup from 'yup'
import { useFormik } from 'formik'
import './Register.css'
import { useAuthStore } from '../../store'
import { useState } from 'react'


export const Register = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        lastname: Yup.string().required('El nombre es obligatorio'),
        email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
        repeatpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Este campo es obligatorio'),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            password: "",
            repeatpassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const [combo, setCombo] = useState(1);

    console.log(combo)


    return (
        <div className='register-container'>


            <div className='register-content-items'>
                <h1>REGISTRO</h1>
                <input type="text" placeholder='Nombre' name='name' onChange={formik.handleChange} />
                <span>{formik.errors?.name}</span>
                <input type="text" placeholder='Apellido' name='lastname' onChange={formik.handleChange} />
                <span>{formik.errors?.lastname}</span>
                <input type="email" placeholder='Correo' name='email' onChange={formik.handleChange} />
                <span>{formik.errors?.email}</span>
                <input type="password" placeholder='Contraseña' name='password' onChange={formik.handleChange} />
                <span>{formik.errors?.password}</span>
                <input type="password" placeholder='Repíta la contraseña' name='repeatpassword' onChange={formik.handleChange} />
                <span>{formik.errors?.repeatpassword}</span>
                <select value={combo} onChange={(e) => setCombo(e.target.value)}>
                    <option value="1"> Arthur</option>
                    <option value="2"> Oscar</option>
                    <option value="3"> Josua</option>
                </select>


                <button type="button" onClick={formik.handleSubmit}>Registrarse</button>
                <Link to="/auth/login">Ingresar</Link>
            </div>
        </div>

    )
}
