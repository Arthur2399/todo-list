import { useDispatch, useSelector } from 'react-redux'
import { login } from '../slice';

export const useAuthStore = () => {
    const { isLoading, status, user } = useSelector(state => state.auth);
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

        //Metodos
        startLogin
    }
}
