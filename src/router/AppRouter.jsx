import { Navigate, Route, Routes } from 'react-router-dom';
import { ModulesRoutes } from '../module';
import { AuthRoutes } from '../auth';
import { useAuthStore } from '../store/auth/hooks/useAuthStore';

export const AppRouter = () => {

    const { status } = useAuthStore();
    return (
        <Routes>
            {
                status === "Authenticated"
                    ? <>
                        <Route path="/*" element={<ModulesRoutes />} />
                        <Route path="/*" element={<Navigate to="/" />} />
                    </>
                    : <>
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        <Route path="/*" element={<Navigate to="/auth/login" />} />
                    </>
            }
        </Routes>
    )
}
