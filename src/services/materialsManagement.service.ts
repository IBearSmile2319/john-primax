import { axiosConnect } from "../helpers/axios";
import { GET_MATERIALS_MANAGEMENT } from "./paths.env";
const API = axiosConnect();

export const getFetchMaterialsManagement = async () => {
  const { data } = await API.get(GET_MATERIALS_MANAGEMENT);
  return data;
};
