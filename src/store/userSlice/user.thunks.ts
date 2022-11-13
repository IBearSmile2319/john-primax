import { AppDispatch } from "..";
import { postGetToken, postRefreshToken } from "../../services/user.service";

import { setError, setLoading, setLoggedIn, setToken, setUser } from "./user.slice";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const data  = await postGetToken(email, password);
      dispatch(setToken(data.objModel.access_Token));
      dispatch(setLoggedIn(data.objModel.access_Token ? true : false));
      dispatch(setLoading(false));
      if (data.objModel.access_Token) {
        localStorage.setItem("token", data.objModel.access_Token);
      }
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
      dispatch(setLoading(false));
    }
  };


export const refreshToken = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const data = await postRefreshToken(token);
      dispatch(setToken(data.objModel.access_Token));
      dispatch(setLoggedIn(data.objModel.access_Token ? true : false));
      if (data.objModel.access_Token) {
        localStorage.setItem("token", data.objModel.refreshToken);
      }
    }
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};