import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../utils/api';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('ck_token');
        if (!token) { setLoading(false); return; }

        api.get('/api/auth/me')
            .then(data => setUser(data.user))
            .catch(() => localStorage.removeItem('ck_token'))
            .finally(() => setLoading(false));
    }, []);

    const login = async (email, password) => {
        const data = await api.post('/api/auth/login', { email, password });
        localStorage.setItem('ck_token', data.token);
        setUser(data.user);
        return data.user;
    };

    const register = async ({ email, password, phone, name }) => {
        const data = await api.post('/api/auth/register', { email, password, phone, name });
        localStorage.setItem('ck_token', data.token);
        setUser(data.user);
        return data.user;
    };

    const logout = () => {
        localStorage.removeItem('ck_token');
        setUser(null);
    };

    const updateUser = (updatedUser) => setUser(updatedUser);

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
