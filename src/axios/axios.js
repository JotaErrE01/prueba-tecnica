import axios from 'axios';


export const clienteAxios = () => {
    const baseURL = 'https://randomuser.me/api';
    const instance = axios.create({
        baseURL,
    })

    return instance;
}
