import * as authService from '../services/s_auth.js'

export const Login = async (req, res) => {
    const { email, contrasenia } = req.body;

    //Asegura que ambos campos existan
    if (!email || !contrasenia) {
        return res.status(400).json({ success: false, message: 'Falta email o contraseña.' });
    };

    try {
        const { token, rol } = await authService.loginUser(email, contrasenia);

        res.status(200).json({ success: true, message: 'Autenticación exitosa', token, rol });

    } catch (error) {
        //capturar el error lanzado por el servicio
        if (error.message === 'Credenciales Invalidas') {
            return res.status(401).json({ success: false, message: 'Email o contraseña incorrectos.' });
        };
        console.error("Error en el login:", error.message);
        res.status(500).json({ success: false, message: 'Error interno del servidor.' });
    }
};

