import { axiosConnect } from "../helpers/axios";
import {
  DELETE_PURCHASE_ORDERS,
  GET_EXPORTE_PURCHASE_ORDERS,
  GET_PURCHASE_ORDERS,
  POST_PURCHASE_ORDERS,
  PUT_PURCHASE_ORDERS,
} from "./paths.env";
const API = axiosConnect();

export const getFetchPurchaseOrders = async () => {
  const { data } = await API.get(GET_PURCHASE_ORDERS);
  return data;
};

export const getFetchExportPurchaseOrders = async () => {
  const { data } = await API.get(GET_EXPORTE_PURCHASE_ORDERS);
  return data;
};

// postPurchaseOrders.ts
export const postPurchaseOrders = async (body: any) => {
  const { data } = await API.post(POST_PURCHASE_ORDERS, body);
  return data;
};

// putPurchaseOrders.ts
export const putPurchaseOrders = async (body: any) => {
  const { data } = await API.put(PUT_PURCHASE_ORDERS, body);
  return data;
};

// deletePurchaseOrders.ts
export const deletePurchaseOrders = async (id: number) => {
  const { data } = await API.delete(
    DELETE_PURCHASE_ORDERS.replace(":id", id.toString())
  );
  return data;
};
