import { useState } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { useAuthStore } from '../../store'
import './Register.css'
import { todoApi } from '../../api/todoApi'


export const Register = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        lastName: Yup.string().required('El apellido es obligatorio'),
        email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
        repeatpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Este campo es obligatorio'),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            repeatpassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const { repeatpassword, ...rest } = values;
            try {
                const resp = await todoApi.post('/api/auth/register', rest);
                console.log(resp)
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div className='register-container'>
            <div className='register-content-items'>
                <h1>REGISTRO</h1>
                <input type="text" placeholder='Nombre' name='name' onChange={formik.handleChange} />
                <span>{formik.errors?.name}</span>
                <input type="text" placeholder='Apellido' name='lastName' onChange={formik.handleChange} />
                <span>{formik.errors?.lastname}</span>
                <input type="email" placeholder='Correo' name='email' onChange={formik.handleChange} />
                <span>{formik.errors?.email}</span>
                <input type="password" placeholder='Contraseña' name='password' onChange={formik.handleChange} />
                <span>{formik.errors?.password}</span>
                <input type="password" placeholder='Repíta la contraseña' name='repeatpassword' onChange={formik.handleChange} />
                <span>{formik.errors?.repeatpassword}</span>
                <button type="button" onClick={formik.handleSubmit}>Registrarse</button>
                <Link to="/auth/login">Ingresar</Link>
            </div>
        </div>

    )
}
