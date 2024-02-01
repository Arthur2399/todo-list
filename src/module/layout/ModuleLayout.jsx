import { NavBar } from "./components"

export const ModuleLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}
