import { AppDispatch } from "..";
import { getFetchSystemParameters } from "../../services/systemParameters.service";
import { setError, setSystemParameters } from "./systemParameter.slice";

export const getSystemParametersThunk = () => async (dispatch: AppDispatch) => {
  try {
    const { objModel } = await getFetchSystemParameters();
    dispatch(setSystemParameters(objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};
