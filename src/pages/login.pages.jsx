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

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            
            const response = await fetch("http://localhost:3001/login", {
                
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
                
            });

            const data = await response.json();
            console.log( data)

            if (data.success) {
                navigate('/home');
            } else {
                setError('Nombre o contraseña incorrectos');
            }
        } catch (err) {
            console.error("Error en el inicio de sesión", err);
            setError('Hubo un problema con el inicio de sesión');
        }
    }; 

    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password, email }),
            });
            const data = await response.json();

            if (data.success) {
                navigate('/home');
            } else {
                setError('Error en el registro');
            }
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
                            placeholder={"Ingrese su nombre"} 
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
                            placeholder={"Ingrese su nombre"} 
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
