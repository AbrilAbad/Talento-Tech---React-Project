import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from './CarritoContext';

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {

    const { setIsAuth } = useContext(CarritoContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!email) validationErrors.email = 'Email requerido';
        if (!password) validationErrors.password = 'Contraseña requerida';

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        try {
            const res = await fetch('utils/users.json');
            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setError({ email: 'Credenciales Inválidas' });
            } else {

                if (foundUser.role === 'admin') {
                    setIsAuth(true);
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError({ email: 'Algo salió mal. Por favor, intentalo más tarde.' });
        }
    };

    const logout = () => {
    setEmail('');
    setPassword('');
    setError({});
    setIsAuth(false); 
  };

    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, error, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext)
