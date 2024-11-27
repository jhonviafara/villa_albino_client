import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";


function Login() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Para el registro
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
    
setTimeout
    const handleLogin = async (event) => {
        event.preventDefault();

        if (!nombre || !password) {
             setError(' debe completar todos los campos ');
            setTimeout(() => setError(""), 3000);
            return;
            
          }
        try {  
            const response = await fetch("http://localhost:3001/auth/login", {
                
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
                
            });
            const data = await response.json();
            setError('Usuario logueado con éxito');                            
            if (response.status === 200) {
               return navigate('/home');
                
            } else {
                
                setError('Nombre o contraseña incorrectos');
                setTimeout(() => setError(""), 3000);

            }
        } catch (err) {
            console.error("Error en el inicio de sesión", err);
             setError('Hubo un problema con el inicio de sesión');           
             setTimeout(() => setError(""), 3000); // Borra el mensaje de error automáticamente
        }
    }; 
    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/reg/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password, email }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Error en el registro');
                return;
            }

            const data = await response.json();
            setError('Usuario registrado con éxito');
            console.log(data);
        } catch (err) {
            console.error("Error en el registro", err);
            setError('Hubo un problema con el registro');
            
        }
    };
    
    return (
        <div className="hero bg-green-700 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <img src={Logo} alt="Logo" className="w-44 block drop-shadow-xl" />
                {isRegistering ? (
                    <form className="max-w-md" onSubmit={handleRegister}>
                        <StyledInput 
                            placeholder={"Ingrese su usuario"} 
                            textColor={"text-gray"}
                            value={nombre}
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <StyledInput 
                            placeholder={"Ingrese su correo electrónico"} 
                            type="email" 
                            textColor={"text-gray"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <StyledInput 
                            placeholder={"Ingrese su contraseña"} 
                            type="password" 
                            textColor={"text-gray"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <StyledInput 
                            placeholder={"Confirme su contraseña"} 
                            type="password" 
                            textColor={"text-gray"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <StyledButton accept innerText={"Registrarse"} btnType={"submit"} />
                    </form>
                ) : (
                    <form className="max-w-md" onSubmit={handleLogin}>
                        <StyledInput 
                            placeholder={"Ingrese su usuario"} 
                            textColor={"text-gray"}
                            value={nombre}
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <StyledInput 
                            placeholder={"Ingrese su contraseña"} 
                            type="password" 
                            textColor={"text-gray"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
                    </form>
                )}
                <button 
                    className="text-white mt-4 underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                >
                    {isRegistering ? "Ya tienes cuenta? Inicia sesión" : "No tienes cuenta? Regístrate"}
                </button>
            </div>
        </div>
    );
}

export default Login;
