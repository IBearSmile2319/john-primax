import { axiosConnect } from "../helpers/axios";
import { GET_EXPORTE_REGISTER_OF_CONCEPTS, GET_REGISTER_OF_CONCEPTS } from "./paths.env";
const API = axiosConnect();

export const getFetchRegisterOfConcepts = async () => {
    const { data } = await API.get(GET_REGISTER_OF_CONCEPTS);
    return data;
}

export const getFetchExportRegisterOfConcepts = async () => {
    const { data } = await API.get(GET_EXPORTE_REGISTER_OF_CONCEPTS);
    return data;
}