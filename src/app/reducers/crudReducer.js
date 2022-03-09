import { types } from "../types/types";

const initialState = {
    usuarios: null,
}

export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CRUD_READ:
            return {
                ...state,
                usuarios: action.payload,
            }

        case types.CRUD_CREATE:
            return {
                ...state,
                usuarios: [...state.usuarios, { nombre: action.payload, id: Math.random() }],
                usuarioActual: null
            }

        case types.CRUD_DELETE:
            return {
                ...state,
                usuarios: [
                    ...state.usuarios.filter(usuario => usuario.id !== action.payload)
                ]
            }

        case types.CRUD_UPDATE:
            return {
                ...state,
                usuarioActual: state.usuarios.find(usuario => usuario.id === action.payload),
            }

        case types.CRUD_UPDATE_FINALIZADO:
            return {
                ...state,
                usuarioActual: null,
                usuarios: state.usuarios.map(usuario => {
                    if (usuario.id === action.payload.id) {
                        return action.payload;
                    }
                    return usuario;
                })
            }
    
        default:
            return state;
    }
}