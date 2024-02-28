import { Navigate, Route, Routes } from 'react-router-dom';
import { ModulesRoutes } from '../module';
import { AuthRoutes } from '../auth';
import { useAuthStore } from '../store/auth/hooks/useAuthStore';
import { useEffect } from 'react';

export const AppRouter = () => {

    const { status, startCheckToken } = useAuthStore();


    useEffect(() => {
        startCheckToken();
    }, [])


    if (status == 'checking') return <>Cargando...</>

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
