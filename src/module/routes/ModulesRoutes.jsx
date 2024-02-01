import { Route, Routes } from "react-router-dom"
import { TodoListPage } from "../todoList"
import { ModuleLayout } from "../layout"

export const ModulesRoutes = () => {
    return (
        <ModuleLayout>
            <Routes>
                <Route path="/" element={<h2>Bienvenido</h2>} />
                <Route path="/to-do" element={<TodoListPage />} />
                <Route path="/progress" element={<h2>Progreso</h2>} />
            </Routes>
        </ModuleLayout>
    )
}
