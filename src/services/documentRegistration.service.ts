import { axiosConnect } from "../helpers/axios";
import { IPostDocumentRegistration } from "../store/documentRegistration/documentRegistration.interface";
import { GET_DOCUMENT_REGISTRATION, GET_EXPORTE_DOCUMENT_REGISTRATION } from "./paths.env";

const API = axiosConnect();

export const getFetchDocumentRegistration = async () => {
  const { data } = await API.get(GET_DOCUMENT_REGISTRATION);
  return data;
};

export const getFetchExportDocumentRegistration = async () => {
  const { data } = await API.get(GET_EXPORTE_DOCUMENT_REGISTRATION);
  return data;
};

// post and put

export const postDocumentRegistration = async (body: IPostDocumentRegistration) => {
  const { data } = await API.post(GET_DOCUMENT_REGISTRATION, body);
  return data;
};

export const putDocumentRegistration = async (body: IPostDocumentRegistration) => {
  const { data } = await API.put(GET_DOCUMENT_REGISTRATION, body);
  return data;
};
