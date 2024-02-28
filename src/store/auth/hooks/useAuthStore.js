import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../slice';
import { todoApi } from '../../../api/todoApi';

export const useAuthStore = () => {
    const { isLoading, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (data) => {
        try {
            const resp = await todoApi.post('/api/auth', data);
            sessionStorage.setItem('token', resp.data.token)
            dispatch(login({ ...resp.data }))
        } catch ({ response }) {
            const { data } = response
            dispatch(logout(data.msg))
        }
    }

    const startCheckToken = async () => {
        const token = sessionStorage.getItem('token');
        console.log(token);
        if (!token) return dispatch(logout());
        try {
            const { data } = await todoApi.get('/api/auth/renew')
            dispatch(login({ ...data }))
        } catch (error) {
            dispatch(logout())
        }
    }

    const startLogout = () => {
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
