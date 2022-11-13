import { axiosConnect } from "../helpers/axios";
import { GET_EXPORTE_PROVIDERS, GET_PROVIDERS } from "./paths.env";
const API = axiosConnect();

export const getFetchProviders = async () => {
    const { data } = await API.get(GET_PROVIDERS);
    return data;
}

export const getFetchExportProviders = async () => {
    const { data } = await API.get(GET_EXPORTE_PROVIDERS);
    return data;
}