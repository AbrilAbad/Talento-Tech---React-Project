import { useAuth } from '../context/AuthContext';

const Login = () => {

  const {email, setEmail, password, setPassword, handleSubmit, error} = useAuth()

  return (
    <div style={containerStyle}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          {error.email && <small style={errorStyle}>{error.email}</small>}
        </div>

        <div style={inputGroupStyle}>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          {error.password && <small style={errorStyle}>{error.password}</small>}
        </div>

        <button type="submit" style={buttonStyle}>Ingresar</button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '2rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fdfdfd',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '0.7rem',
  backgroundColor: '#772f1a',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.8rem',
};

export default Login;
