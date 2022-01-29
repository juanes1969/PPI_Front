import axios from 'axios';
import { url_api_localhost } from './http-common';

export const getUsers = async (formLogin) => {
    const url = `${url_api_localhost}User/getUser/`;
    const resp = await axios.post(url, formLogin)

    return resp;
}
