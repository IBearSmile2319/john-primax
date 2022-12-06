export interface IOperationManagementInitialState {
    operationManagement: IOperationManagementObjModel[];
    isLoading: boolean;
    error: string;
};

export interface IOperationManagementRootObject {
  status: number;
  description: string;
  objModel: IOperationManagementObjModel[];
}

export interface IOperationManagementObjModel {
  id: number;
  codeCC: string;
  description: string;
  codeSap: string;
  secondaryCode: number;
  state: boolean;
  updateDate: string;
}
