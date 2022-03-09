import axios from "axios";
import { clienteAxios } from "../../axios/axios"
import { types } from '../types/types';


export const startGetUsers = () => {
    return async (dispatch) => {
        const { data } = await clienteAxios().get();
        dispatch(getUsers(data.results));
    }
}

const getUsers = (payload) => ({
    type: types.CRUD_READ,
    payload
})


export const createUsers = (userData) => {
    return ({
        type: types.CRUD_CREATE,
        payload: userData.nombre
    })
}

export const eliminarUsuario = (uid) => ({
    type: types.CRUD_DELETE,
    payload: uid
})

export const actualizarUsuario = (uid) => ({
    type: types.CRUD_UPDATE,
    payload: uid
})

export const finalizarActualizacion = (usuario) => ({
    type: types.CRUD_UPDATE_FINALIZADO,
    payload: usuario
})
