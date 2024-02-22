import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../slice';
import { todoApi } from '../../../api/todoApi';

export const useAuthStore = () => {
    const { isLoading, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (data) => {
        console.log(data)
        try {
            const resp = await todoApi.post('/api/auth', data);
            dispatch(login({ ...resp.data }))
        } catch ({ response }) {
            const { data } = response
            dispatch(logout(data.msg))
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
        startLogout
    }
}
