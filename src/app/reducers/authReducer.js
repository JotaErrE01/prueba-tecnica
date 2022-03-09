import { types } from "../types/types";


const initialState = {
    user: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INICIAR_SESION:
            localStorage.setItem('isAuth', action.payload.isAuth.toString());
            return {
                ...state,
                user: action.payload.user,
                isAuth: action.payload.isAuth,
            };

        case types.CERRAR_SESION:
            return {};

        default:
            return state;
    }
}

