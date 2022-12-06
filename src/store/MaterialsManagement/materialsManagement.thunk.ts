import { AppDispatch } from "..";
import { getFetchMaterialsManagement } from "../../services/materialsManagement.service";
import {
  setError,
  setIsLoading,
  setMaterialsManagement,
} from "./materialsManagement.slice";

export const getMaterialsManagementThunk =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { objModel } = await getFetchMaterialsManagement();
      dispatch(setMaterialsManagement(objModel));
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };
