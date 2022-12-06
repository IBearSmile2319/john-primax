import { AppDispatch } from "..";
import {
  deleteRegisterOfConcepts,
  getFetchRegisterOfConcepts,
  postRegisterOfConcepts,
  putRegisterOfConcepts,
} from "../../services/regOfConcepts.service";
import { setIsLoading } from "../providers/providers.slice";
import { IRegOfConceptsRootObject } from "./regOfConcepts.interface";
import { setError, setRegOfConcepts } from "./regOfConcepts.slice";

export const getRegisterOfConcepts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const data: IRegOfConceptsRootObject = await getFetchRegisterOfConcepts();
    dispatch(setRegOfConcepts(data.objModel));
  } catch (error: any) {
    dispatch(setError(error.response.data.message));
  }
};

// {
//     "id": 0,
//     "code": "string",
//     "description": "string",
//     "state": true,
//     "updateDate": "2022-12-05T17:25:57.370Z"
//   }

interface IPostRegOfConcepts {
  code: string;
  description: string;
  state?: boolean;
  
}

// postRegisterOfConcepts.ts
export const postRegisterOfConceptsThunk =
  (body: IPostRegOfConcepts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await postRegisterOfConcepts(body);
      dispatch(getRegisterOfConcepts());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };

interface IPutRegOfConcepts extends IPostRegOfConcepts {
    id: number;
    updateDate?: Date;
}

// putRegisterOfConcepts.ts
export const putRegisterOfConceptsThunk =
  (body: IPutRegOfConcepts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await putRegisterOfConcepts(body);
      dispatch(getRegisterOfConcepts());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };

// deleteRegisterOfConcepts.ts

export const deleteRegisterOfConceptsThunk =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      await deleteRegisterOfConcepts(id);
      dispatch(getRegisterOfConcepts());
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }
  };
