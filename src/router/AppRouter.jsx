import { Route, Routes } from 'react-router-dom';
import { TodoListPage } from '../page';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoListPage />} />
        </Routes>
    )
}
