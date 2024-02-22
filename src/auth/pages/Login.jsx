import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import *as Yup from 'yup';
import { useAuthStore } from '../../store';
import './Login.css';

export const Login = () => {

    const { startLogin, errorMessage } = useAuthStore();


    const validationSchema = Yup.object({
        email: Yup.string().email("Ingrese un correo electronico válido").required("Este campo es oblogatorio"),
        password: Yup.string().required("Este campo es oblogatorio"),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            startLogin(values);
        }
    });

    return (
        <div className='container-login'>
            <div className='content-login'>
                <h1>¡Bienvenido!</h1>
                <input
                    type='email'
                    placeholder='Usuario'
                    name='email'
                    onChange={formik.handleChange}
                />
                <span>{formik.errors?.email}</span>
                <input
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    onChange={formik.handleChange}

                />
                <span>{formik.errors?.password}</span>
                {!!errorMessage && <div div className="alert-message-login">
                    <span>{errorMessage}</span>
                </div>
                }
                <button type='button' onClick={formik.handleSubmit}>
                    INGRESAR
                </button>
                <Link to="/auth/register">¿No estas registrado?</Link>
            </div>
        </div >
    )
}
