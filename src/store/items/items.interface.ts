export interface IItemsInitialState {
    items: IItemsObjModel[];
    isLoading: boolean;
    error: string;
}

export interface IItemsRootObject {
  status: number;
  description: string;
  objModel: IItemsObjModel[];
}

export interface IItemsObjModel {
  id: number;
  code: string;
  description: string;
  idClassification: number;
  idRegistrationOfConcepts: number;
  state: boolean;
  updateDate: string;
}
