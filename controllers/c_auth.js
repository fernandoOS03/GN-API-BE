import * as authService from '../services/s_auth.js'

export const Login = async (req, res) =>{
    const {email, contrasenia} = req.body;
    try{
        const {token, rol} = authService.loginUser(email, contrasenia);

    }catch{

    }
};