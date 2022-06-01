import axios from 'axios';
import { url_api } from './http-common';

export const getUsers = (formLogin) => {
    const url = `${url_api}User/getUser/`;
    const resp = axios.post(url, formLogin)

    return resp;
}
