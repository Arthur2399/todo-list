import { useAuthStore } from "../../../store/auth/hooks/useAuthStore"
import './NavBar.css';

export const ToggeMenu = () => {

    const { startLogout } = useAuthStore()

    return (
        <div className="
        toggle-Menu">
            <button onClick={startLogout}>salir</button>
        </div>
    )
}
