import { axiosConnect } from "../helpers/axios";
import { GET_TOKEN, REFRESH_TOKEN } from "./paths.env";
const API = axiosConnect();
export const postGetToken = async (email: string, password: string) => {
    const { data } = await API.post(GET_TOKEN, { email, password });
    return data;
}

export const postRefreshToken = async (token: string) => {
    const { data } = await API.post(REFRESH_TOKEN, { 
        refreshToken: token
     });
    return data;
}