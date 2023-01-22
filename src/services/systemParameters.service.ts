import { axiosConnect } from "../helpers/axios";
import {GET_SYSTEM_PARAMETERS } from "./paths.env";
const API = axiosConnect();

export const getFetchSystemParameters = async () => {
    const { data } = await API.get(GET_SYSTEM_PARAMETERS);
    return data;
}
