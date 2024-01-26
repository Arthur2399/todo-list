import { Route, Routes } from "react-router-dom"
import { TodoListPage } from "../todoList"

export const ModulesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoListPage />} />
        </Routes>
    )
}
