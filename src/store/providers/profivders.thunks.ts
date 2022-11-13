import {AppDispatch} from ".." ;
import { getFetchProviders } from "../../services/providers.service";
import { setError } from "../userSlice/user.slice";
import { IProviderRootObject } from "./providers.interface";
import { setIsLoading, setProviders } from "./providers.slice";

export const getProviders = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true));
        const data : IProviderRootObject = await getFetchProviders();
        dispatch(setProviders(data.objModel));
    } catch (error: any) {
        dispatch(setError(error.response.data.message));
    }
}