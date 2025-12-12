import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const login = (email, password) => {
        const fakeUser = {
            id: 1,
            name: "user",
            email,
            password,
            avatar: null,
        };
        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));
        return true;
    };

    const register = (name, email, password) => {
        const newUser = {
            id: 1, 
            name, 
            email,
            password,
            avatar: null,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const updateProfile = (updated) => {
        const newUser = {...user, ...updated};
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    return (
        <AuthContext.Provider value = {{ user, login, register, logout, updateProfile}}>
            {children}
        </AuthContext.Provider>
    );
}