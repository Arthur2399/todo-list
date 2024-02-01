import { NavBar } from "./components"

export const ModuleLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main style={{
                marginTop: "70px"
            }}>
                {children}
            </main>
        </div>
    )
}
