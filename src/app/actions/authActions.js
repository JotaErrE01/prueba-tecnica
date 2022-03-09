import { types } from "../types/types";
import { user } from '../../data/user';


export const iniciarSesion = ({ usuario, password }) => {
    if( usuario !== user.email || password !== user.password ){
        return {
            type: types.AUTH_ERROR
        }
    }

    return {
        type: types.INICIAR_SESION,
        payload: {
            user: usuario,
            isAuth: true,
        }
    }
}


