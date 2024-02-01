import { useAuthStore } from "../../../store/auth/hooks/useAuthStore"

export const ToggeMenu = () => {

    const { startLogout } = useAuthStore()

    return (
        <div
            style={{
                width: "200px",
                height: "100px",
                background: "white",
                position: "absolute",
                right: 0,
                marginTop: "70px"
            }}
        >
            <button onClick={startLogout}>salir</button>
        </div>
    )
}
