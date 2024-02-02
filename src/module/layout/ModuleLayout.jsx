import { NavBar } from "./components"
import './ModuleLayout.css'

export const ModuleLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className="moduleLayout-container">
                {children}
            </main>
        </>
    )
}
