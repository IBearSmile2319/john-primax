import { AppDispatch } from "..";
import { getFetchOperationManagement } from "../../services/operationManagement.service";
import {
  setError,
  setIsLoading,
  setOperationManagement,
} from "./operationManagement.slice";

export const getOperationManagementThunk =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { objModel } = await getFetchOperationManagement();
      dispatch(setOperationManagement(objModel));
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };
