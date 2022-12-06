import { AppDispatch } from "..";
import { getFetchItems } from "../../services/items.service";
import { setError, setIsLoading, setItems } from "./items.slice";

export const getFetchItemsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { objModel } = await getFetchItems();
    dispatch(setItems(objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};
