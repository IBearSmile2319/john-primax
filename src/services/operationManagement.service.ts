import { axiosConnect } from "../helpers/axios";
import { GET_OPERATION_MANAGEMENT } from "./paths.env";
const API = axiosConnect();

export const getFetchOperationManagement = async () => {
  const { data } = await API.get(GET_OPERATION_MANAGEMENT);
  return data;
};
