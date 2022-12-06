import { axiosConnect } from "../helpers/axios";
import { DELETE_REGISTER_OF_CONCEPTS, GET_EXPORTE_REGISTER_OF_CONCEPTS, GET_REGISTER_OF_CONCEPTS, POST_REGISTER_OF_CONCEPTS, PUT_REGISTER_OF_CONCEPTS } from "./paths.env";
const API = axiosConnect();

export const getFetchRegisterOfConcepts = async () => {
    const { data } = await API.get(GET_REGISTER_OF_CONCEPTS);
    return data;
}

export const getFetchExportRegisterOfConcepts = async () => {
    const { data } = await API.get(GET_EXPORTE_REGISTER_OF_CONCEPTS);
    return data;
}

// postRegisterOfConcepts.ts
export const postRegisterOfConcepts = async (body: any) => {
    const { data } = await API.post(POST_REGISTER_OF_CONCEPTS, body);
    return data;
}

// putRegisterOfConcepts.ts
export const putRegisterOfConcepts = async (body: any) => {
    const { data } = await API.put(PUT_REGISTER_OF_CONCEPTS, body);
    return data;
}

// deleteRegisterOfConcepts.ts

export const deleteRegisterOfConcepts = async (id: number) => {
    const { data } = await API.delete(DELETE_REGISTER_OF_CONCEPTS.replace(":id", id.toString()));
    return data;
}