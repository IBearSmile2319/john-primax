import { axiosConnect } from "../helpers/axios";
import { GET_USER_OPERATIONS } from "./paths.env";
const API = axiosConnect();

export const getFetchUserOperations = async () => {
  const { data } = await API.get(GET_USER_OPERATIONS);
  return data;
};
