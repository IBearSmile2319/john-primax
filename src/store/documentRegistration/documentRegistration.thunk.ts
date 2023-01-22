import { AppDispatch } from "..";
import {
  getFetchDocumentRegistration,
  postDocumentRegistration,
  putDocumentRegistration,
} from "../../services/documentRegistration.service";
import { IPostDocumentRegistration } from "./documentRegistration.interface";

import { setError, setIsLoading, setDocumentRegistration } from "./documentRegistration.slice";

export const getFetchDocumentRegistrationThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { objModel } = await getFetchDocumentRegistration();
    dispatch(setDocumentRegistration(objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};

// post and put

export const postDocumentRegistrationThunk = (body: IPostDocumentRegistration) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    await postDocumentRegistration(body);
    dispatch(getFetchDocumentRegistrationThunk());
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};

export const putDocumentRegistrationThunk = (body: IPostDocumentRegistration) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    await putDocumentRegistration(body);
    dispatch(getFetchDocumentRegistrationThunk());
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};
