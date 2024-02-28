import { Route, Routes } from "react-router-dom"
import { TodoListPage } from "../todoList"
import { ModuleLayout } from "../layout"

export const ModulesRoutes = () => {
    return (
        <ModuleLayout>
            <Routes>
                <Route path="/" element={<TodoListPage />} />
            </Routes>
        </ModuleLayout>
    )
}
