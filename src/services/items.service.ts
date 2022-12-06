import { axiosConnect } from "../helpers/axios";
import { GET_ITEMS } from "./paths.env";
const API = axiosConnect();

export const getFetchItems = async () => {
  const { data } = await API.get(GET_ITEMS);
  return data;
};
