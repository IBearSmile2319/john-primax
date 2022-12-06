import { AppDispatch } from "..";
import {
  deletePurchaseOrders,
  getFetchPurchaseOrders,
  postPurchaseOrders,
  putPurchaseOrders,
} from "../../services/purchaseOrders.service";
import {
  setError,
  setIsLoading,
  setPurchaseOrders,
} from "./purchaseOrders.slice";

export const getPurchaseOrdersThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { objModel } = await getFetchPurchaseOrders();
    dispatch(setPurchaseOrders(objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};

// {
//     "operationCode": 4,
//     "purchaseAmount": 120,
//     "documentNumber": "string",
//     "registrationDate": "2022-12-06T01:51:54.434Z",
//     "state": true
//   }
interface IPostPurchaseOrders {
  operationCode: number;
  purchaseAmount: number;
  documentNumber: string;
  registrationDate: Date;
  state: boolean;
}
export const postPurchaseOrdersThunk =
  (body: IPostPurchaseOrders) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await postPurchaseOrders(body);
      dispatch(getPurchaseOrdersThunk());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };

interface IPutPurchaseOrders extends IPostPurchaseOrders {
  id: number;
}
export const putPurchaseOrdersThunk =
  (body: IPutPurchaseOrders) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await putPurchaseOrders(body);
      dispatch(getPurchaseOrdersThunk());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };

export const deletePurchaseOrdersThunk =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await deletePurchaseOrders(id);
      dispatch(getPurchaseOrdersThunk());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };
