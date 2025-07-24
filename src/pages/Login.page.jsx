import { post } from "../api/api";
import { useState } from "react";

export const Login = () => {
    const [status, setStatus] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            await post("/auth/login", { email, password });
            setStatus("Inicio de sesion exitoso");
            window.location.href = "/dashboard";
        } catch (error) {
            console.error("Login failed:", error);
            setStatus("Error: compruebe su contraseña/usuario");
        }
    };

    return (
        <div className="bg-gray-200 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
                {status && (
                    <p className={`text-black text-center mb-4 p-4 ${status.includes('Error') ? 'bg-red-500' : 'bg-green-500'}`}>
                        {status}
                    </p>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese su correo electrónico" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese su contraseña" required />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200" type="submit">Iniciar Sesión</button>
                </form>
                <p className="mt-4 text-sm text-center">
                    ¿No tienes una cuenta? <a href="/auth/register" className="text-blue-600 hover:underline">Regístrate aquí</a>
                </p>
            </div>
        </div>
    );
};