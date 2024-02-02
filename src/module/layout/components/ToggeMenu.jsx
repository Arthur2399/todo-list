import { useAuthStore } from "../../../store/auth/hooks/useAuthStore"
import './ToggleMenu.css';

export const ToggeMenu = () => {

    const { startLogout } = useAuthStore()

    return (
        <div className="toggle-Menu">
            <button onClick={startLogout}>
                Salir
                <span class="material-symbols-outlined">
                    logout
                </span>
            </button>
        </div>
    )
}
