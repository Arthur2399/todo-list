import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../slice';

export const useAuthStore = () => {
    const { isLoading, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = () => {
        dispatch(login())
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
