import {AppDispatch} from '..'
import { getFetchRegisterOfConcepts } from '../../services/regOfConcepts.service';
import { setIsLoading } from '../providers/providers.slice';
import { IRegOfConceptsRootObject } from './regOfConcepts.interface';
import { setError, setRegOfConcepts } from './regOfConcepts.slice';

export const getRegisterOfConcepts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true));
        const data : IRegOfConceptsRootObject = await getFetchRegisterOfConcepts();
        dispatch(setRegOfConcepts(data.objModel));
    } catch (error: any) {
        dispatch(setError(error.response.data.message));
    }
}