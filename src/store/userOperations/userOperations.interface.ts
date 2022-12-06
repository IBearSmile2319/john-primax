export interface IUserOperationsInitialState {
  userOperations: IUserOperationsObjModel[];
  isLoading: boolean;
  error: string;
}

export interface IUserOperationsRootObject {
  status: number;
  description: string;
  objModel: IUserOperationsObjModel[];
}

export interface IUserOperationsObjModel {
  id: number;
  idUsers: number;
  idOperationManagement: number;
  updateDate: string;
  state: boolean;
}
