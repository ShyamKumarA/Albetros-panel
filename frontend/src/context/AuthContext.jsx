import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    const initialAuthState = storedAuthState ? JSON.parse(storedAuthState) : false;

    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

    useEffect(() => {
        // Save the authentication state to localStorage whenever it changes
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
