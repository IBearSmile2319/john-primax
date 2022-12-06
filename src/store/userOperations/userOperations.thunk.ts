import { AppDispatch } from "..";
import { getFetchUserOperations } from "../../services/userOperations.service";
import {
  setError,
  setIsLoading,
  setUserOperations,
} from "./userOperations.slice";

export const getUserOperationsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { objModel } = await getFetchUserOperations();
    dispatch(setUserOperations(objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};
