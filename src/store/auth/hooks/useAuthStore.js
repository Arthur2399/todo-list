import { useDispatch, useSelector } from 'react-redux'
import { login } from '../slice';

export const useAuthStore = () => {
    const { isLoading, status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = () => {
        dispatch(login())
    }


    // STARTLOGOUT

    return {
        //Atributos
        isLoading,
        status,
        user,
        errorMessage,

        //Metodos
        startLogin
    }
}
