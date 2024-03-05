import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../slice';
import { todoApi } from '../../../api/todoApi';
import { useNavigate } from 'react-router-dom';

export const useAuthStore = () => {
    const { isLoading, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startLogin = async (data) => {
        try {
            const resp = await todoApi.post('/api/auth', data);
            sessionStorage.setItem('token', resp.data.token)
            dispatch(login({ ...resp.data }))
            navigate('/');
        } catch ({ response }) {
            const { data } = response
            dispatch(logout(data.msg))
        }
    }

    const startCheckToken = async () => {
        const token = sessionStorage.getItem('token');
        if (!token) return dispatch(logout());
        try {
            const { data } = await todoApi.get('/api/auth/renew')
            dispatch(login({ ...data }))
        } catch (error) {
            dispatch(logout())
        }
    }

    const startLogout = () => {
        sessionStorage.clear()
        dispatch(logout())
    }


    // STARTLOGOUT

    return {
        //Atributos
        isLoading,
        status,
        user,
        errorMessage,

        //Metodos
        startLogin,
        startLogout,
        startCheckToken,
    }
}
