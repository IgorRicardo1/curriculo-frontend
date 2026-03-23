import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {
        // Decodifica o payload do JWT (segunda parte da string)
        const payload = JSON.parse(atob(token.split('.')[1]));
        const agora = Math.floor(Date.now() / 1000);

        if (payload.exp && payload.exp < agora) {
            // Token expirado
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
            return <Navigate to="/login" replace />;
        }
    } catch (e) {
        // Token inválido ou malformado
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
