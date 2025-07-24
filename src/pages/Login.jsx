export const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border-2 border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                {status && <p className="text-red-500 text-center mb-4">{status}</p>}
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese su correo electrónico" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese su contraseña" required />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Iniciar Sesión</button>
                </form>
                <p className="mt-4 text-sm text-center">
                    ¿No tienes una cuenta? <a href="/auth/register" className="text-blue-600 hover:underline">Regístrate aquí</a>
                </p>
            </div>
        </div>
    );
};